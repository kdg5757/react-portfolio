export const RoutePath = {
  TOP: '',
  CHART: 'chart'
} as const;

export const RouteTitle = {
  TOP: 'TOP',
  CHART: 'グラフ'
} as const;

export const RouteList = [
  {
    path: RoutePath.TOP,
    title: RouteTitle.TOP
  },
  {
    path: RoutePath.CHART,
    title: RouteTitle.CHART
  }
] as const;