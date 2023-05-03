import { addItem, removeItem } from "./RecordSlice";
import { useSelector, useDispatch } from "react-redux";
import { Container, Select } from "@mantine/core";
import { useRef } from "react";
import { TextField, Typography } from "@mui/material";
import DetailButton from "../Button/DetailButton";
import { Button } from "@material-ui/core";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Record() {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.record.cart);
  const inputRef = useRef(null);

  const addRecordItem = (e) => {
    const inputValue = inputRef.current;
    dispatch(
      addItem({
        title: inputValue.title.value,
        comments: inputValue.comments.value,
        star: inputValue.star.value,
        genre: inputValue.genre.value
      })
    );
    inputValue.title.value = "";
    inputValue.comments.value = "";
    inputValue.star.value = "6";
    inputValue.genre.value = "0";
    e.preventDefault();
  };

  return (
    <>
      <Typography component="h1" variant="h4">
        Book Record
      </Typography>
      <form ref={inputRef} onSubmit={addRecordItem}>
        <Container p="xl">
          <TextField
            margin="normal"
            fullWidth
            name="title"
            label="Book Title"
            type="text"
            id="title"
            required
          />
          <TextField
            margin="normal"
            fullWidth
            name="comments"
            label="Book Comments"
            type="text"
            id="comments"
            required
          />

          <Select
            label="How was the book?"
            defaultValue="6"
            id="star"
            data={[
              { value: "6", label: "--" },
              { value: "5", label: "★★★★★" },
              { value: "4", label: "★★★★☆" },
              { value: "3", label: "★★★☆☆" },
              { value: "2", label: "★★☆☆☆" },
              { value: "1", label: "★☆☆☆☆" }
            ]}
          />
          <Select
            label="genre"
            defaultValue="0"
            id="genre"
            data={[
              { value: "0", label: "--" },
              { value: "1", label: "NOVELS" },
              { value: "2", label: "FICTION" },
              { value: "3", label: "NON-FICTION" },
              { value: "4", label: "MAGAGINE" },
              { value: "5", label: "COMIC" },
              { value: "6", label: "HOBBY" }
            ]}
          />
        </Container>
        <Button type="submit" variant="outlined" color="primary">
          Add Item
        </Button>
      </form>
      <TableContainer style={{ overflowX: "scroll", listStyle: "none" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                Title
              </TableCell>
              <TableCell align="center">Star</TableCell>
              <TableCell align="center">Detail</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {record.map((item) => (
              <TableRow
                key={item.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {item.title}
                </TableCell>
                <TableCell align="center">{item.star}</TableCell>
                <TableCell align="center">
                  <DetailButton row={item} handleOpen />
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => dispatch(removeItem(item.title))}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Record;
