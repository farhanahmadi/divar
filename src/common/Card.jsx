import React from "react";
import Link from "next/link";
//import mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function CardComponent() {
  return (
    <Link href="/">
      <Card className="flex h-36 rounded text-center pr-1 gap-x-2 shadow-text-field-shadow">
        <Box sx={{ flex: "1 0 auto" }}>
          <CardContent className="flex flex-col px-1 py-2">
            <Typography
              className="text-black text-wrap text-start"
              variant="h1"
              fontSize={18}
            >
              206تیپ ۶ اتومات کم کار
            </Typography>
            <Typography
              className="mt-10 text-light-primary-600/80 text-start"
              variant="subtitle2"
              component="div"
              fontSize={12}
            >
              در حد نو
            </Typography>
            <Typography
              className="text-light-primary-600/80 text-start"
              variant="subtitle1"
              component="div"
              fontSize={12}
            >
              ۳۹۰,۰۰۰,۰۰۰ تومان
            </Typography>
            <Typography
              className="text-light-primary-600/80 text-start"
              variant="subtitle2"
              component="div"
              fontSize={12}
            >
              لحظاتی پیش
            </Typography>
          </CardContent>
        </Box>
        <Box className="w-36 aspect-w-16 aspect-h-5 relative">
          <CardMedia
            className="w-full h-full object-center object-cover"
            component="img"
            image="/assets/img/car.webp"
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </Link>
  );
}

export default CardComponent;
