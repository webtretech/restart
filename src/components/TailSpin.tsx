import clsx from "clsx";
import { FunctionComponent, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
export const DEFAULT_COLOR = "#4fa94d";
export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
  "aria-busy": true,
  role: "progressbar",
};

export interface BaseProps extends PrimaryProps {
  color?: string;
}

export interface PrimaryProps {
  ariaLabel?: string;
  height?: number | string;
  visible?: boolean;
  width?: number | string;
  wrapperClass?: string;
  wrapperStyle?: Style;
}

export type Style = {
  [key: string]: string;
};

export interface TailSpinProps extends BaseProps {
  radius?: number | string;
  strokeWidth?: number | string;
}

export const TailSpin: FunctionComponent<TailSpinProps> = ({
  ariaLabel = "tail-spin-loading",
  color = DEFAULT_COLOR,
  height = 80,
  radius = 1,
  strokeWidth = 2,
  visible = true,
  width = 80,
  wrapperClass,
  wrapperStyle,
}): ReactElement => {
  const strokeWidthNum = parseInt(String(strokeWidth));
  const viewBoxValue = strokeWidthNum + 36;
  const halfStrokeWidth = strokeWidthNum / 2;
  const processedRadius = halfStrokeWidth + parseInt(String(radius)) - 1;
  return (
    <div
      aria-label={ariaLabel}
      className={twMerge(
        clsx({ flex: visible, hidden: !visible }),
        wrapperClass,
      )}
      data-testid="tail-spin-loading"
      style={wrapperStyle}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <svg
        data-testid="tail-spin-svg"
        height={height}
        viewBox={`0 0 ${viewBoxValue} ${viewBoxValue}`}
        width={width}
        xmlns={SVG_NAMESPACE}
      >
        <defs>
          <linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="63.146%" stopColor={color} stopOpacity=".631" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform={`translate(${halfStrokeWidth} ${halfStrokeWidth})`}>
            <path
              d="M36 18c0-9.94-8.06-18-18-18"
              id="Oval-2"
              stroke={color}
              strokeWidth={strokeWidth}
            >
              <animateTransform
                attributeName="transform"
                dur="0.9s"
                from="0 18 18"
                repeatCount="indefinite"
                to="360 18 18"
                type="rotate"
              />
            </path>
            <circle cx="36" cy="18" fill="#fff" r={processedRadius}>
              <animateTransform
                attributeName="transform"
                dur="0.9s"
                from="0 18 18"
                repeatCount="indefinite"
                to="360 18 18"
                type="rotate"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
};
