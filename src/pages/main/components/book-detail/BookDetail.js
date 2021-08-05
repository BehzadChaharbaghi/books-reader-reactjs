import React, { useEffect, useRef, useState } from "react";
import useStyles from "./styles";
import { Button, Grid, TextareaAutosize } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { toast } from "material-react-toastify";
import classNames from "classnames/bind";
import {
  setCommentText,
  setProductDetail,
  useProductDispatch,
  useProductState,
} from "../../../../context/ProductContext";
import {
  getProductByIdRequest,
  newCommentRequest,
} from "../../../../api/api_content";
import Loading from "../../../../components/Loading/Loading";

const BookDetail = (props) => {
  const classes = useStyles();
  const productDispatch = useProductDispatch();
  const { productDetail: product, commentText } = useProductState();
  // const commentText = useProductState();
  const input = useRef();
  const location = useLocation();

  const [isLoading, setLoading] = useState(true);

  const newComment = () => {
    let comment = commentText;
    if (!comment) return;
    const formData = new FormData();
    formData.append("text", commentText);

    // axios req
    newCommentRequest(formData, (isOk, data) => {
      if (!isOk) return toast.error(data);

      toast.success("نظر شما با موفقیت ثبت شد...");
      // updateComments();
      setCommentText(productDispatch, "");
    });
  };

  useEffect(() => {
    getProductByIdRequest((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setProductDetail(productDispatch, data);
      setLoading(false);
    });
    // input.value = "";
  }, []);

  // useEffect(() => {
  //   getProductByIdRequest(props.match.params.id, (isOk, data) => {
  //     if (!isOk) return toast.error(data);
  //     setProductDetail(productDispatch, data);
  //   });
  // }, [location]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container item xs={12}>
          <Grid container item sm={7}>
            <Grid item direction={"column"} className={classes.gridItem}>
              <img
                style={{ width: "15rem", height: "15rem" }}
                src={product[0].pic}
              />
              <section>
                <h1>{product.title}</h1>
                <h3>نویسنده: {product[0].authorsName}</h3>
                {/*<h3>گوینده: {product.authorsName}</h3>*/}
              </section>
              <div>
                <section className={classes.rateSection}>
                  <span>{product[0].rateValue}</span>
                  <h4>({product[0].countRated})</h4>
                </section>
                {/*<span>{product[0].time}</span>*/}
                <Button variant={"contained"} color={"secondary"}>
                  خواندن این اثر
                </Button>
              </div>
            </Grid>
            <Grid item>
              <div>
                <h3>درباره کتاب: {product[0].title}</h3>
              </div>
              <div>
                <h3>{product[0].productDescription}</h3>
              </div>
            </Grid>
            {/*info*/}
            <Grid item className={classes.infoGrid}>
              <div>
                <h3>مشخصات</h3>
              </div>
              <section>
                <div className={classes.infoItem}>
                  <h4>نویسنده</h4>
                  <h4>{product[0].authorsName}</h4>
                </div>
                <div className={classes.infoItem}>
                  <h4>مدت</h4>
                  <h4>{product[0].time}</h4>
                </div>
                <div className={classes.infoItem}>
                  <h4>حجم دانلود</h4>
                  <h4>{product[0].fileSize}</h4>
                </div>
                <div className={classes.infoItem}>
                  <h4>تعداد فصل</h4>
                  <h4>{product[0].productSeason}</h4>
                </div>
                <div className={classes.infoItem}>
                  <h4>دسته</h4>
                  <h4>{product[0].productCategoryName}</h4>
                </div>
                <div className={classes.infoItem}>
                  <h4>ناشر صوتی</h4>
                  <h4>{product[0].publishersName}</h4>
                </div>
                <div className={classes.infoItem}>
                  <h4>سال انتشار</h4>
                  <h4>{product[0].publisherId}</h4>
                </div>
                <div className={classes.infoItem}>
                  <h4>زبان</h4>
                  <h4>{product[0].language}</h4>
                </div>
              </section>
            </Grid>
          </Grid>
          {/*recive section*/}
          <Grid container item sm={5} direction={"column"}>
            <Grid
              item
              className={classNames(classes.gridItem, classes.priceBox)}
            >
              <h3>دریافت کتاب صوتی</h3>
            </Grid>
            <Grid item direction={"row"}>
              <section className={classes.priceSection}>
                <h4>قیمت</h4>
                <section>
                  <h5>
                    <del>{product[0].productPrice}</del>
                  </h5>
                  <h6>{product[0].productOffPrice}</h6>
                </section>
              </section>
            </Grid>
            <Grid item>
              <section className={classes.btnSection}>
                <Button variant={"contained"} fullWidth color={"primary"}>
                  خرید
                </Button>
                <div className={classes.twoBtn}>
                  <Button fullWidth variant={"contained"} color={"secondary"}>
                    دانلود کتاب
                  </Button>
                  <Button fullWidth variant={"contained"} color={"secondary"}>
                    نشان کردن
                  </Button>
                </div>
                <Button variant={"contained"} fullWidth color={"primary"}>
                  ارسال به عنوان هدیه
                </Button>
              </section>
            </Grid>
            <Grid item>
              <section>
                <section className={classes.infoSection}>
                  <h5>امتیاز شما به این اثر</h5>
                  <h5>ایکون ستاره</h5>
                </section>
                <section className={classes.infoSection}>
                  <h5>اپیزودهای دیگر</h5>
                  <h5>{product[0].productSeason}</h5>
                </section>
                <div>
                  <section className={classes.infoSection}>
                    <img
                      style={{ width: 40, height: 40 }}
                      src={product[0].pic}
                    />
                    <h5>{product[0].publishersName}</h5>
                  </section>
                </div>
              </section>
            </Grid>
          </Grid>
        </Grid>
        {/*comments*/}
        <Grid container item sm={7}>
          <Grid item>
            <h4>ارسال دیدگاه</h4>
          </Grid>
          <Grid item className={classes.inputContainer}>
            <TextareaAutosize
              className={classes.input}
              minRows={8}
              placeholder="نظرت رو بنویس..."
              ref={input}
              value={commentText}
              onChange={(e) => setCommentText(productDispatch, e.target.value)}
            />
          </Grid>
          <Grid item className={classes.submitContainer}>
            <section className={classes.submitComment}>
              <h3>آیکون ستاره</h3>
              <Button
                color={"primary"}
                variant={"contained"}
                onClick={newComment}
              >
                ثبت نظر
              </Button>
            </section>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetail;
