import React, { FC } from "react";
import * as Yup from "yup";
import {ValidationErrors} from "../../../constant/AppConstants";
import {makeGetInputError} from "../../../constant/formValidationUtils";
import {Button, Grid, Typography} from "@material-ui/core";
import CustomInputText from "../../custom/CustomInputText";
import CustomInputDate from "../../custom/CustomInputDate";
import CustomSelect from "../../custom/CustomSelect";
import {buildingTypeItems, elevatorItems, flexibleItems} from "../../../constant/SelectMenuItems";
import {Formik} from "formik";

const initialValues: MovingOfferDeparture = {
    postalCode: '',
    place: '',
    road: '',
    no: '',
    orderDate: '',
    flexible: 0,
    buildingType: '',
    elevator: '',
    floor: '',
    rooms: '',
    surface: '',
    type: [],
    comment: '',
};

const validationSchema = Yup.object({
    postalCode: Yup.string()
        .required(ValidationErrors.REQUIRED)
        .max(10, ValidationErrors.MAX),
    place: Yup.string()
        .required(ValidationErrors.REQUIRED),
    road: Yup.string()
        .required(ValidationErrors.REQUIRED),
    no: Yup.string()
        .required(ValidationErrors.REQUIRED),
    orderDate: Yup.string()
        .required(ValidationErrors.REQUIRED),
    flexible: Yup.number()
        .required(ValidationErrors.REQUIRED),
    buildingType: Yup.string()
        .required(ValidationErrors.REQUIRED),
    elevator: Yup.string()
        .required(ValidationErrors.REQUIRED),
    // floor: Yup.string()
    //     .required(ValidationErrors.REQUIRED),
    // rooms: Yup.string()
    //     .required(ValidationErrors.REQUIRED),
    // surface: Yup.string()
    //     .required(ValidationErrors.REQUIRED),
    // type: Yup.array()
    //     .required(ValidationErrors.REQUIRED),
});

interface MovingDepartureProps {
    onNextHandler: any;
}

const MovingDeparture: FC<MovingDepartureProps> = ({ onNextHandler }) => {

    const submit = async (offer: MovingOfferDeparture) => {
        console.log("Called In Child .")
        onNextHandler();
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={validationSchema}>
            {({
                  errors,
                  handleChange,
                  handleSubmit,
                  submitCount,
                  touched,
                  values
              }) => {
                const getInputError = makeGetInputError(touched, errors, submitCount);
                return (
                    <div>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" component="h2">
                                            Place of departure
                                        </Typography>
                                    </Grid>
                                    <CustomInputText
                                        id="postalCode"
                                        value={values.postalCode}
                                        error={getInputError('postalCode')}
                                        label='PostalCode'
                                        handleInputChange={handleChange}
                                    />
                                    <CustomInputText
                                        id="place"
                                        value={values.place}
                                        error={getInputError('place')}
                                        label='Place'
                                        handleInputChange={handleChange}
                                    />
                                    <CustomInputText
                                        id="road"
                                        value={values.road}
                                        error={getInputError('road')}
                                        label='Road'
                                        handleInputChange={handleChange}
                                    />
                                    <CustomInputText
                                        id="no"
                                        value={values.no}
                                        error={getInputError('no')}
                                        label='No'
                                        handleInputChange={handleChange}
                                    />
                                    <CustomInputDate
                                        id="orderDate"
                                        value={values.orderDate}
                                        error={getInputError('orderDate')}
                                        label='Order Date'
                                        handleInputChange={handleChange}
                                    />
                                    <CustomSelect
                                        id="flexible"
                                        value={values.flexible}
                                        error={getInputError('flexible')}
                                        label='Flexible'
                                        handleInputChange={handleChange}
                                        menuItems={flexibleItems}
                                    />
                                    <CustomSelect
                                        id="buildingType"
                                        value={values.buildingType}
                                        error={getInputError('buildingType')}
                                        label='Building Type'
                                        handleInputChange={handleChange}
                                        menuItems={buildingTypeItems}
                                    />
                                    <CustomSelect
                                        id="elevator"
                                        value={values.elevator}
                                        error={getInputError('elevator')}
                                        label='Elevator'
                                        handleInputChange={handleChange}
                                        menuItems={elevatorItems}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e: any) => handleSubmit(e)}
                        >
                             Next
                        </Button>
                    </div>
                )
            }}
        </Formik>
    )
}

export default MovingDeparture;
