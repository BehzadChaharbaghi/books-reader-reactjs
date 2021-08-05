import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { getSubscriptionTypes } from "../../../../api/api_content";
import { toast } from "material-react-toastify";
import Loading from "../../../../components/Loading/Loading";

const SubscriptionTypes = () => {
  const classes = useStyles();

  const [creditType, setCreditType] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState(-1);

  useEffect(() => {
    getSubscriptionTypes((isOk, data) => {
      if (!isOk) return toast.warning(data.message);
      setCreditType(data);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    let amount = parseFloat(event.target.value);
    console.log(amount);
    setValue(amount);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.formTitle}>
          <h2>خرید اشتراک</h2>
        </Grid>
        <Grid item xs={12} className={classes.radioContainer}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              column
              aria-label="subscription-types"
              name="SubscriptionTypes"
              value={value}
              onChange={handleChange}
              className={classes.textForm}
            >
              {creditType.map((item) => (
                <>
                  <section
                    className={classes.radioSection}
                    style={{ borderRight: `solid 4px ${item.color}` }}
                  >
                    <FormControlLabel
                      className={classes.input}
                      id={item.id}
                      value={item.amount}
                      control={<Radio color={"secondary"} />}
                      label={item.textCredit}
                    />
                    <div>
                      <Typography variant={"subtitle1"}>
                        {item.amount}
                      </Typography>
                    </div>
                  </section>
                </>
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant={"contained"} fullWidth color={"secondary"}>
            خرید اشتراک
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SubscriptionTypes;
