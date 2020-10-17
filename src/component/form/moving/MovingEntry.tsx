import React, { FC } from "react";
import * as Yup from "yup";
import {ValidationErrors} from "../../../constant/AppConstants";
import {makeGetInputError} from "../../../constant/formValidationUtils";
import {Button, Grid, Typography} from "@material-ui/core";
import CustomInputText from "../../custom/CustomInputText";
import CustomSelect from "../../custom/CustomSelect";
import {buildingTypeItems, elevatorItems} from "../../../constant/SelectMenuItems";
import {Formik} from "formik";

const initialValues: MovingOfferEntry = {
    entryPostalCode: '',
    entryPlace: '',
    entryRoad: '',
    entryNo: '',
    entryBuildingType: '',
    entryElevator: '',
};

const validationSchema = Yup.object({
    entryPostalCode: Yup.string()
        .required(ValidationErrors.REQUIRED),
    entryPlace: Yup.string()
        .required(ValidationErrors.REQUIRED),
    entryRoad: Yup.string()
        .required(ValidationErrors.REQUIRED),
    entryNo: Yup.string()
        .required(ValidationErrors.REQUIRED),
    entryBuildingType: Yup.string()
        .required(ValidationErrors.REQUIRED),
    entryElevator: Yup.string()
        .required(ValidationErrors.REQUIRED),
});

interface MovingEntryProps {
    onNextHandler: any;
    onBackHandler: any;
}

const MovingEntry: FC<MovingEntryProps> = ({onNextHandler, onBackHandler}) => {

    const submit = async (offer: MovingOfferEntry) => {
        onNextHandler()
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
                                                        Entry Point
                                                    </Typography>
                                                </Grid>
                                                <CustomInputText
                                                    id="entryPostalCode"
                                                    value={values.entryPostalCode}
                                                    error={getInputError('entryPostalCode')}
                                                    label='PostalCode'
                                                    handleInputChange={handleChange}
                                                />
                                                <CustomInputText
                                                    id="entryPlace"
                                                    value={values.entryPlace}
                                                    error={getInputError('entryPlace')}
                                                    label='Place'
                                                    handleInputChange={handleChange}
                                                />
                                                <CustomInputText
                                                    id="entryRoad"
                                                    value={values.entryRoad}
                                                    error={getInputError('entryRoad')}
                                                    label='Road'
                                                    handleInputChange={handleChange}
                                                />
                                                <CustomInputText
                                                    id="entryNo"
                                                    value={values.entryNo}
                                                    error={getInputError('entryNo')}
                                                    label='No'
                                                    handleInputChange={handleChange}
                                                />
                                                <CustomSelect
                                                    id="entryBuildingType"
                                                    value={values.entryBuildingType}
                                                    error={getInputError('entryBuildingType')}
                                                    label='Building Type'
                                                    handleInputChange={handleChange}
                                                    menuItems={buildingTypeItems}
                                                />
                                                <CustomSelect
                                                    id="entryElevator"
                                                    value={values.entryElevator}
                                                    error={getInputError('entryElevator')}
                                                    label='Elevator'
                                                    handleInputChange={handleChange}
                                                    menuItems={elevatorItems}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <div>
                                        <Button onClick={onBackHandler}>
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={(e: any) => handleSubmit(e)}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            )
                        }}
                    </Formik>
                )
            }}
        </Formik>
    )
}

export default MovingEntry;
