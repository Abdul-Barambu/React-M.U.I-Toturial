import logo from './logo.svg';
import './App.css';
import { LocalizationProvider } from '@mui/lab';
import AdapterDatefns from '@mui/lab/AdapterDateFns'
import MuiTypography from './component/MuiTypography';
import MuiButtons from './component/MuiButtons';
import MuiTextField from './component/MuiTextField';
import MuiSelect from './component/MuiSelect';
import MuiRadioButtons from './component/MuiRadioButtons';
import MuiCheck from './component/MuiCheck';
import MuiSwitch from './component/MuiSwitch';
import MuiRating from './component/MuiRating';
import MuiAutocomplete from './component/MuiAutocomplete';
import MuiLayoutBox from './component/MuiLayoutBox';
import MuiCard from './component/MuiCard';
import MuiAccordion from './component/MuiAccordion';
import MuiNavbar from './component/MuiNavbar';
import MuiLink from './component/MuiLink';
import MuiDrawer from './component/MuiDrawer';
import MuiSpeedDial from './component/MuiSpeedDial';
import MuiBottomNav from './component/MuiBottomNav';
import MuiAvatarBadge from './component/MuiAvatarBadge';
import MuiChip from './component/MuiChip';
import MuiTable from './component/MuiTable';
import MuiAlert from './component/MuiAlert';
import MuiSnackBar from './component/MuiSnackBar';
import MuiDialog from './component/MuiDialog';
import MuiPicker from './component/MuiPicker';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDatefns}>
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButtons /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButtons /> */}
      {/* <MuiCheck /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      {/* <MuiLayoutBox /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiNavbar /> */}
      {/* <MuiLink /> */}
      {/* <MuiDrawer /> */}
      {/* <MuiSpeedDial /> */}
      {/* <MuiBottomNav /> */}
      {/* <MuiAvatarBadge /> */}
      {/* <MuiChip /> */}
      {/* <MuiTable /> */}
      {/* <MuiAlert /> */}
      {/* <MuiSnackBar /> */}
      <MuiDialog />
      {/* <MuiPicker /> */}
    </div>
    </LocalizationProvider>
  );
}

export default App;
