# PositionCovarianceType

Type of position covariance.

## Parent type

`PositionCovarianceType` appears in the [`LocationFix`](./location-fix.md) message schema.

## Values

| Name             | Value | Description                                                   |
| ---------------- | ----- | ------------------------------------------------------------- |
| `UNKNOWN`        | 0     | Unknown position covariance type                              |
| `APPROXIMATED`   | 1     | Position covariance is approximated                           |
| `DIAGONAL_KNOWN` | 2     | Position covariance is per-axis, so put it along the diagonal |
| `KNOWN`          | 3     | Position covariance of the fix is known                       |
