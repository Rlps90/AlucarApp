import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/pt-br'

export default function BasicDateCalendar() {
	return (
		<LocalizationProvider
			dateAdapter={AdapterDayjs}
			adapterLocale="pt-br">
			<DatePicker disablePast />
		</LocalizationProvider>
	)
}
