import * as React from "react";
import { Setting2 } from "iconsax-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

interface PropsSettings {
  isMenuHamburger: boolean;
}

export const Settings = (props: PropsSettings) => {
  const { isMenuHamburger } = props;
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<number>(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = parseInt(event.target.value);
    setTheme(selectedTheme);
    console.log(selectedTheme);
  };

  return (
    <div>
      {isMenuHamburger ? (
        <span onClick={handleOpen}>Configurações</span>
      ) : (
        <Setting2
          onClick={handleOpen}
          size="32"
          variant="Bulk"
          className="text-zinc-400 cursor-pointer hover:text-purple-700 transition-all duration-[0.3s]"
        />
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="border-b-2"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Configurações
          </Typography>
          <FormControl>
            <span className="text-xl">Temas</span>

            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={theme}
              onChange={handleThemeChange}
            >
              <FormControlLabel
                value={0}
                control={
                  <Radio
                    sx={{
                      color: "#ccc",
                      "&.Mui-checked": {
                        color: "#7e22ce",
                      },
                    }}
                  />
                }
                label="Light"
              />
              <FormControlLabel
                value={1}
                control={
                  <Radio
                    sx={{
                      color: "#ccc",
                      "&.Mui-checked": {
                        color: "#7e22ce",
                      },
                    }}
                  />
                }
                label="Dark"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};
