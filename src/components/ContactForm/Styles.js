import { styled } from '@material-ui/core/styles'
import { 
  TextField,
  Typography,
  Button,
  FormControl
 } from '@material-ui/core'

export const FormContainer = styled(FormControl)({
  marginTop: '10%',
  textAlign: 'center',
  alignItems: 'center',
  maxWidth: '500px',
  backgroundColor: 'white',
  padding: '20px',
  
  borderRadius: '12px',
})

export const FormInput = styled(TextField)({
  width: '100%',
})

export const FormHeading = styled(Typography)({
  color: 'rgb(72, 103, 145)',
  fontWeight: 'normal'
})

export const SubmitButton = styled(Button)({
  backgroundColor: 'rgb(72, 103, 145)',
  width: '50%'
})