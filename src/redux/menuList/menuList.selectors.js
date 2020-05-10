import { createSelector } from 'reselect'

const selectMenuList = state => state.menuList

export const selectMenuListSections = createSelector(
    [selectMenuList],
    menuList => menuList.sections
)