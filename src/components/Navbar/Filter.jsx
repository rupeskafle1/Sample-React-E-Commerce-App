import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import classNames from "classnames";
import Divider from "@material-ui/core/Divider";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import FilterListIcon from "@material-ui/icons/FilterList";

const useStyles = makeStyles((theme) => ({
  buttons: {
    float: "right",
  },
  ml15: {
    marginLeft: "15px",
  },
  drawer: {
    padding: "5px 20px",
  },
  checkboxstyle: {
    padding: "4px",
  },
  mt20: {
    marginTop: "20px",
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  filterTitles: {
    fontSize: "20px",
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },

  checkBoxIcon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedCheckBoxIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));

/* This component renders the filter, contains functionality of filtering the products based on certain categories */
const Filter = (props) => {
  const [state, setState] = React.useState({
    lessThan500: false,
    lessThan1000: false,
    moreThan1000: false,
  });

  const { productDetails } = props;
  const [drawerState, setDrawerState] = React.useState(false);
  const [selectedGender, setSelectedGender] = React.useState("all");
  const classes = useStyles();

  const handlePriceFilterChange = (event) => {
    setState({ ...state, [event.target.value]: event.target.checked });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(true);
  };

  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={classNames(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  /*handler for filter apply button*/
  const handleApply = () => {
    const { handleFilterApply } = props;
    const array = [];
    //getting values of all checked checkboxes
    const checkboxes = document.querySelectorAll("input[name=price]:checked");

    for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value);
    }
    setDrawerState();
    //calling the parent handler
    handleFilterApply({ price: array, gender: selectedGender });
  };

  const handleDrawerClose = () => {
    setDrawerState(false);
    setSelectedGender(productDetails.appliedFilters.gender);
    setState({
      lessThan500:
        productDetails.appliedFilters.price?.indexOf("lessThan500") !== -1,
      lessThan1000:
        productDetails.appliedFilters.price?.indexOf("lessThan1000") !== -1,
      moreThan1000:
        productDetails.appliedFilters.price?.indexOf("moreThan1000") !== -1,
    });
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const renderGenderFilters = () => {
    return (
      <>
        <div className={classNames(classes.mt20, classes.filterTitles)}>
          Gender
        </div>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <FormControlLabel
              value="all"
              control={<StyledRadio checked={selectedGender === "all"} />}
              label="All"
            />
            <FormControlLabel
              value="female"
              control={<StyledRadio checked={selectedGender === "female"} />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<StyledRadio checked={selectedGender === "male"} />}
              label="Male"
            />
          </RadioGroup>
        </FormControl>
      </>
    );
  };

  const renderPriceFilters = () => {
    return (
      <>
        <div className={classNames(classes.mt20, classes.filterTitles)}>
          Price (USD)
        </div>
        <FormGroup column>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.lessThan500}
                color="primary"
                checkedIcon={
                  <span
                    className={classNames(
                      classes.checkBoxIcon,
                      classes.checkedCheckBoxIcon
                    )}
                  />
                }
                icon={<span className={classes.checkBoxIcon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                {...props}
                name="price"
                onChange={handlePriceFilterChange}
              />
            }
            name="lessThan500"
            value="lessThan500"
            label="0-500"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.lessThan1000}
                color="primary"
                checkedIcon={
                  <span
                    className={classNames(
                      classes.checkBoxIcon,
                      classes.checkedCheckBoxIcon
                    )}
                  />
                }
                icon={<span className={classes.checkBoxIcon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                {...props}
                name="price"
                onChange={handlePriceFilterChange}
              />
            }
            name="lessThan1000"
            value="lessThan1000"
            label="500-1000"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.moreThan1000}
                color="primary"
                checkedIcon={
                  <span
                    className={classNames(
                      classes.checkBoxIcon,
                      classes.checkedCheckBoxIcon
                    )}
                  />
                }
                icon={<span className={classes.checkBoxIcon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                {...props}
                name="price"
                onChange={handlePriceFilterChange}
              />
            }
            name="moreThan1000"
            value="moreThan1000"
            label="1000+"
          />
        </FormGroup>
      </>
    );
  };

  /* creating filter view looping through lists */
  const list = (anchor) => (
    <div className={classes.drawer} role="presentation">
      <div className="text-bold filter-title">Custom Filters</div>
      <Divider />
      {renderGenderFilters()}
      <Divider />
      {renderPriceFilters()}
      <Divider />
      <Button
        variant="contained"
        color="primary"
        onClick={handleApply}
        className={classes.ml15}
        style={{ marginTop: "10px" }}
      >
        Apply
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDrawerClose}
        className={classes.ml15}
        style={{ marginTop: "10px" }}
      >
        Close
      </Button>
    </div>
  );

  return (
    <>
      <Button
        onClick={toggleDrawer("right", true)}
        variant="contained"
        color="primary"
        className={classes.ml15}
        id="filter-btn"
        startIcon={<FilterListIcon />}
      >
        Filter
      </Button>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default Filter;
