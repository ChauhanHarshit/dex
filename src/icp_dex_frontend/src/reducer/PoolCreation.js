import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CoinCount: 2,
    FeeShare: null,
    PercentShare: 50,
    TotalAmount: null,
    Confirmation: false,
    TotalAmount: 0,
    Tokens: [
        {
            Name: 'Token1',
            ShortForm: 'Token1',
            Amount: 0,
            Selected: false,
            WeightedPercentage: 50,
            ImagePath: null,
            Amount: 0.02,
            currencyAmount: 66.10
        },
        {
            Name: "Token2",
            ShortForm: 'Token2',
            Amount: 0,
            Selected: false,
            WeightedPercentage: 50,
            ImagePath: null,
            Amount: 12.2161,
            currencyAmount: 64.89
        }
    ],

}

const Pool = createSlice({
    name: "pool",
    initialState,
    reducers: {
        AddCoin: (state, action) => {
            state.CoinCount += 1;
            state.PercentShare = parseFloat(100 / state.CoinCount).toFixed(2)
            state.Tokens.push(
                {
                    Name: 'new Token',
                    ShortForm: 'NWT',
                    Amount: 0,
                    Selected: false,
                    WeightedPercentage: state.PercentShare,
                    ImagePath: null,
                    currencyAmount: 0
                }
            )
            state.Tokens.map((coin) => {
                coin.WeightedPercentage = state.PercentShare
            })

            state.TotalAmount = SumUpValue(state.Tokens)
        },
        RemoveCoin: (state, action) => {
            const removedIndex = action.payload.index;
            state.CoinCount -= 1;
            state.PercentShare = parseFloat(100 / state.CoinCount).toFixed(2);

            let TempToken = state.Tokens
            TempToken.splice(removedIndex, 1);

            state.Tokens = TempToken
            const newPercentShare = parseFloat(100 / state.CoinCount).toFixed(2);
            state.Tokens.forEach((coin, index) => {
                coin.WeightedPercentage = newPercentShare;
            });

            const lastCoinIndex = state.Tokens.length - 1;
            state.Tokens[lastCoinIndex].WeightedPercentage = (100 - newPercentShare * (state.CoinCount - 1)).toFixed(2);

            state.TotalAmount = SumUpValue(state.Tokens)

        },
        SetToken: (state, action) => {

            const index = action.payload.index
            state.Tokens[index].Name = action.payload.TokenData.Name;
            state.Tokens[index].ShortForm = action.payload.TokenData.ShortForm;
            state.Tokens[index].ImagePath = action.payload.TokenData.ImagePath;
            state.Tokens[index].Selected = true;
            state.TotalAmount = SumUpValue(state.Tokens)
        },
        SetFeeShare: (state, action) => {
            console.log("fee share to set:->", action)
            state.FeeShare = action.payload.FeeShare;   
        },
        UpdateAmount: (state, action) => {
            console.log("amount update reducer called", action)
            const index = action.payload.index;
            state.Tokens[index].Amount = action.payload.Amount
            state.TotalAmount = state.Tokens.reduce((total, token) => total + token.Amount, 0);
            state.TotalAmount = SumUpValue(state.Tokens)
        },
        toggleConfirm: (state, action) => {
            // console.log(" Reducer called in page", action.payload.page)
            state.Confirmation = action.payload.value;
        }

    }
});

export const { AddCoin, RemoveCoin, SetToken, SetFeeShare, UpdateAmount, toggleConfirm } = Pool.actions;
export default Pool.reducer;
export const SumUpValue = (tokens) => {
    return tokens.reduce((total, token) => total + token.currencyAmount, 0);
};