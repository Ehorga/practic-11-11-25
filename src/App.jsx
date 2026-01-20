import RadioMap from "./components/RadioMap/RadioMap";

const transportation = [
  { label: "Car", value: "car" },
  { label: "Bicycle", value: "bicycle" },
  { label: "Bus", value: "bus" },
  { label: "Train", value: "train" },
  { label: "Airplane", value: "airplane" },
  { label: "Boat", value: "boat" },
  { label: "Motorcycle", value: "motorcycle" },
  { label: "Tram", value: "tram" },
  { label: "Subway", value: "subway" },
  { label: "Scooter", value: "scooter" }
];
function App() {
  return (
    <>
    <RadioMap list={transportation}/>
    </>
  );
}
export default App;
