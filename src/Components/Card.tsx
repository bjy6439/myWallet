import { Box, Container, Grid } from "@mui/material";

const style = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  cursor: "pointer",
  borderRadius: 5,
  ":hover": {
    backgroundColor: "#6271eb",
  },
};

interface data {
  market: string;
  korean_name: string;
  english_name: string;
}

const Card = ({ item }: { item: data }) => {
  return (
    <Container>
      <Box sx={style}>
        <Grid container p={2} padding={2}>
          <Grid item xs={12} sm={12} md={12} mb={2} textAlign="center">
            마켓 : {item.market}
          </Grid>
          <Grid item xs={10} sm={10} md={10} m={1}>
            한국명 : {item.korean_name}
          </Grid>
          <Grid item xs={12} sm={12} md={12} m={1}>
            영문명 : {item.english_name}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Card;
