import React from "react"
import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">heading 1</Typography>
      <Typography variant="h2">heading 2</Typography>
      <Typography variant="h3">heading 3</Typography>
      <Typography variant="h4" gutterBottom>heading 4</Typography>
      <Typography variant="h5">heading 5</Typography>
      <Typography variant="h6">heading 6</Typography>

      <Typography variant="subtitle1">heading 5</Typography>
      <Typography variant="subtitle2">heading 6</Typography>

      <Typography variant="body1">The UMD links use the latest tag to point to the latest 
      version of the library. This pointer is unstable and subject to change as we release
       new versions. You should consider pointing to a specific version, such as v5.0.0.</Typography>
      <Typography variant="body2">The UMD links use the latest tag to point to the latest 
      version of the library. This pointer is unstable and subject to change as we release new versions.
       You should consider pointing to a specific version, such as v5.0.0.</Typography>
    </div>
  )
}

export default MuiTypography
