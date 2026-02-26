# PositionCovarianceType

Describes how the position covariance data was obtained or estimated.

## Parent type

`PositionCovarianceType` appears in the [`LocationFix`](./location-fix.md) message schema.

## Values

| Name             | Value | Description                                                   |
| ---------------- | ----- | ------------------------------------------------------------- |
| `UNKNOWN`        | 0     | The covariance type could not be determined.                                      |
| `APPROXIMATED`   | 1     | The covariance values are estimated rather than precisely measured.               |
| `DIAGONAL_KNOWN` | 2     | Only per-axis (diagonal) covariance values are available.                        |
| `KNOWN`          | 3     | The full covariance of the position fix is available and accurate.                |
