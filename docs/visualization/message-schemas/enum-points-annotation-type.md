# PointsAnnotationType

Defines how a set of points should be rendered as an annotation.

## Parent type

`PointsAnnotationType` appears in the [`PointsAnnotation`](./points-annotation.md) message schema.

## Values

| Name         | Value | Description                                     |
| ------------ | ----- | ----------------------------------------------- |
| `UNKNOWN`    | 0     | The annotation type could not be determined.                                                 |
| `POINTS`     | 1     | Each point is drawn independently: 0, 1, 2, ...                                              |
| `LINE_LOOP`  | 2     | A closed shape where the last point reconnects to the first: 0-1, 1-2, ..., (n-1)-n, n-0    |
| `LINE_STRIP` | 3     | A continuous path connecting each consecutive point: 0-1, 1-2, ..., (n-1)-n                 |
| `LINE_LIST`  | 4     | Separate segments drawn between each pair of points: 0-1, 2-3, 4-5, ...                     |
