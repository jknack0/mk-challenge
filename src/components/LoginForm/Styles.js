import { styled } from '@material-ui/core/styles'
import { 
  FormControl,
  TextField,
  Typography,
  Button
 } from '@material-ui/core'

export const FormContainer = styled(FormControl)({
  marginTop: '10%',
  textAlign: 'center',
  alignItems: 'center',
  maxWidth: '300px',
  backgroundColor: 'white',
  padding: '20px',
  width: '90vw',
  borderRadius: '12px',
})

export const FormInput = styled(TextField)({
  width: '100%',
  marginTop: '10px',
})

export const FormHeading = styled(Typography)({
  color: 'rgb(72, 103, 145)',
  fontWeight: 'normal'
})

export const SubmitButton = styled(Button)({
  backgroundColor: 'rgb(72, 103, 145)',
  width: '50%',
  marginBottom: '10px'
})