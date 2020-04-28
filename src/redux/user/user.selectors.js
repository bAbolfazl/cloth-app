import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectUserCurrent = createSelector(
    [selectUser],
    user => user.currentUser
)