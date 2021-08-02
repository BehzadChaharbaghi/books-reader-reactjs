import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import { getMoreSection } from "../../../../api/api_content";
import Loading from "../../../../components/Loading/Loading";
import { toast } from "material-react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "../../../../theme/swiper-styles.css";

SwiperCore.use([Navigation]);

const MoreSection = () => {
  const classes = useStyles();
  const [text, setText] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getMoreSection((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setText(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <Typography variant={"h4"} component={"h1"}>
        بیشترین پخش ها
      </Typography>
      <section className={classes.container}>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 800,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 500,
              slidesPerView: 2,
            },
          }}
          id="main"
          width="480"
          navigation
          spaceBetween={25}
        >
          {text.map((item) => {
            return (
              <>
                <SwiperSlide>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={`${item.imageUrl}`}
                      />
                      <Typography
                        className={classes.title}
                        variant="subtitle1"
                        component="h6"
                      >
                        {item.title}
                      </Typography>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default MoreSection;
