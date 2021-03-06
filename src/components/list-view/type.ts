export interface Props {
  lazy?: boolean | string;
  circleColor?: string;
  style?: any;
  className?: string;
  emptyText?: string;
  footerLoadedText?: string;
  footerLoadingText?: string;
  noMore?: string;
  tipText?: string;
  tipFreedText?: string;
  onScrollToLower: (any) => void;
  onPullDownRefresh?: (any) => void;
  hasMore: boolean;
  needInit?: boolean;
  isEmpty?: boolean;
  isError?: boolean;
  launch?: Launch;
  renderEmpty?: JSX.Element;
  renderError?: JSX.Element;
  renderFooterLoading?: any;
  renderFooterLoaded?: any;
  damping?: number;
  distanceToRefresh?: number;
  indicator?: Indicator;
  isLoaded?: boolean;
  selector?: string;
  onScroll?: () => void;
  showIndicator?: boolean;
}

export interface Indicator {
  activate?: any,
  deactivate?: any,
  release?: any,
  tipFreedText?: any;
}

export interface Launch {
  launchEmpty?: boolean;
  launchError?: boolean;
  launchFooterLoading?: boolean;
  launchFooterLoaded?: boolean;
}
