import { AuthLayout } from "../layout/AuthLayout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Nombre completo" type="name" placeholder="Nombre completo" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField label="Contrasena" type="password" placeholder="Contrasena" fullWidth></TextField>
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
