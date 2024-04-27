import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectTokensForPools from '../Modals/poolCreation/SelectTokensForPools';
import SetPoolFees from '../Modals/poolCreation/SetPoolFees';
import InitialLiquidity from '../Modals/poolCreation/InitialLiquidity';
import { useSelector } from 'react-redux';
import { SetToken, AddCoin, RemoveCoin } from '../reducer/PoolCreation';
const steps = ['Select Tokens for Pools', 'Set Pool Fees', 'Add Initial Liquidity'];

const CreatePoolStepsPage = () => {

    
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    // const [Tokens, SetTokens] = useState([
    //     {
    //         Name: 'Token1',
    //         ShortForm: 'Token1',
    //         Amount: 0,
    //         Selected: false,
    //         WeightedPercentage: PercentShare,
    //         ImagePath: null,
    //     },
    //     {
    //         Name: "Token2",
    //         ShortForm: 'Token2',
    //         Amount: 0,
    //         Selected: false,
    //         WeightedPercentage: PercentShare,
    //         ImagePath: null,
    //     }
    // ]);


    const isStepOptional = (step) => {
        return step === 1; // Assuming the second step can be optional
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setSkipped(new Set());
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <SelectTokensForPools  />;
            case 1:
                return <SetPoolFees />;
            case 2:
                return <InitialLiquidity  />;
            default:
                return 'Unknown step';
        }
    };


    return (
        <div className='mx-32'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (


                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps} >{label}</StepLabel>
                            </Step>

                        );
                    })}
                </Stepper>
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <div>
                        {getStepContent(activeStep)}
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
                {activeStep === steps.length && (
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                )}
            </Box>
        </div>
    );
}

export default CreatePoolStepsPage;
