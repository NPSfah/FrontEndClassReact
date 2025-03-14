import DatePicker from "@/components/DateReserve";
import { TextField,Select,MenuItem,InputLabel } from "@mui/material";
export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-5">
            <div className="text-xl font-bold">New Reservation</div>

            <div className="w-fit space-y-2 flex flex-col">
                <TextField id="Name-Lastname" label="Name-Lastname" name="Name-Lastname" variant="standard" />
                <TextField id="Contact-Number" label="Contact-Number" name="Contact-Number" variant="standard" />
                <InputLabel id="venue-label">Select Venue</InputLabel>
                <Select id="venue" variant="standard" name="venue" label="Venue">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
                <DatePicker />
                <button className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-white">
                    Book Venue
                </button>
            </div>

        </main>
    );
}