import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../redux/store';

interface ConnectedCanvasProps {
  onClick: (x: number, y: number) => void;
}

export const CANVAS_SIZE = 500;

export type ShapeType = 'circle' | 'square';
export interface Shape {
  /** Тип фигуры (круг/квадрат) */
  type: ShapeType;
  /** Размер фигуры (радиус) */
  size: number;
  /** Если `true`, то рисует фигуру полностью, а не только контур */
  fill: boolean;
  /** Цвет фигуры */
  color: string;
  /** X-координата фигуры */
  x: number;
  /** Y-координата фигуры */
  y: number;
}
export interface CanvasProps {
  className?: string;
  /** Массив фигур для отрисовки */
  shapes: Shape[];

  /**
   * Событие нажатия мыши на холсте
   * @param x X-координата курсора
   * @param y Y-координата курсора
   */
  onClick: (x: number, y: number) => void;
}

function Canvas(props: CanvasProps) {
  const ref = React.useRef<HTMLCanvasElement | null>(null);
  const context = React.useMemo(
    () => ref.current?.getContext('2d') ?? null,
    [ref.current]
  );

  React.useEffect(() => {
    if (!context) return;
    context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    for (const s of props.shapes) {
      context.strokeStyle = s.color;
      context.fillStyle = s.color;
      context.beginPath();
      switch (s.type) {
        case 'circle':
          context.arc(s.x, s.y, s.size, 0, 2 * Math.PI, false);
          context.closePath();
          break;
        case 'square':
          context.moveTo(s.x - s.size, s.y - s.size);
          context.lineTo(s.x + s.size, s.y - s.size);
          context.lineTo(s.x + s.size, s.y + s.size);
          context.lineTo(s.x - s.size, s.y + s.size);
          context.closePath();
          break;
      }
      if (s.fill) context.fill();
      context.stroke();

      context.fillStyle = 'black';
      context.beginPath();
      context.arc(s.x, s.y, 2, 0, 2 * Math.PI, false);
      context.fill();
    }
  }, [props.shapes, context]);

  const onClick = React.useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const evt = e.nativeEvent as any;
      if (props.onClick) props.onClick(evt.layerX, evt.layerY);
    },
    [props.onClick]
  );

  return (
    //оборот в один элемент и добавление кнопонек
    <div>
      <canvas
        className={classNames('canvas', props.className)}
        ref={ref}
        onClick={onClick}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
      />
      
    </div>
  );
}

function mapProps(state: StoreState, props: ConnectedCanvasProps): CanvasProps {
  return { shapes: state.shapes, onClick: props.onClick };
}
export const ReduxCanvas = connect(mapProps)(Canvas);
