import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CoinCount: 2,
    FeeShare: null,
    PercentShare: 50,
    Tokens: [
        {
            Name: 'Token1',
            ShortForm: 'Token1',
            Amount: 0,
            Selected: false,
            WeightedPercentage: 50,
            ImagePath: null,
        },
        {
            Name: "Token2",
            ShortForm: 'Token2',
            Amount: 0,
            Selected: false,
            WeightedPercentage: 50,
            ImagePath: null,
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
                }
            )
            state.Tokens.map((coin) => {
                coin.WeightedPercentage = state.PercentShare
            })
        },
        RemoveCoin: (state, action) => {
            const removedIndex = action.payload.index;
            state.CoinCount -= 1;
            state.PercentShare = parseFloat(100 / state.CoinCount).toFixed(2);

            let TempToken = state.Tokens
            TempToken.splice(removedIndex, 1);
           
            console.table({"TempToken->":TempToken},{
                "state.Token":state.Tokens
            })

            state.Tokens = TempToken
            const newPercentShare = parseFloat(100 / state.CoinCount).toFixed(2);
            state.Tokens.forEach((coin, index) => {
                coin.WeightedPercentage = newPercentShare;
            });

            const lastCoinIndex = state.Tokens.length - 1;
            state.Tokens[lastCoinIndex].WeightedPercentage = (100 - newPercentShare * (state.CoinCount - 1)).toFixed(2);

        },
        SetToken: (state, action) => {
            console.log("set token, reducer function", action)
            const index = action.payload.index
            state.Tokens[index].Name = action.payload.TokenData.Name;
            state.Tokens[index].ShortForm = action.payload.TokenData.ShortForm;
            state.Tokens[index].ImagePath = action.payload.TokenData.ImagePath;
            state.Tokens[index].Selected = true;
        },
        SetFeeShare: (state, action) => {
            console.log("SetFeeShare reducer function ->", action)
            state.FeeShare = action.payload.FeeShare;
        }
    }
});

export const { AddCoin, RemoveCoin, SetToken, SetFeeShare } = Pool.actions;
export default Pool.reducer;