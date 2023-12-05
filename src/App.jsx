import ButtonWithTooltip from "./ButtonWithTooltip";

function App() {
  return (
    <>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            asperiores doloremque, velit molestias magnam provident dicta cumque
          </div>
        }
      >
        Hover over me(tooltip above)
      </ButtonWithTooltip>

      <ButtonWithTooltip
        tooltipContent={
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          </div>
        }
      >
        Hover over me(tooltip below)
      </ButtonWithTooltip>
    </>
  );
}

export default App;
