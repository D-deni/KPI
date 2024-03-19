// type ReplaceValues<T, TReplace, TWith> = { [K in keyof T]: T[K] extends TReplace ? TWith : T[K] };
//
// type ConditionalTip<T> = T extends { allTips: false }
//   ? ReplaceValues<T, boolean, boolean>
//   : T;
//
// interface AllTips {
//   allTips?: boolean,
//   documentTip?: boolean,
//   cloudTip?: boolean
// }
//
// type UpdatedTips = ConditionalTip<AllTips>
//
// const allTipsEnabled: UpdatedTips = {
//   allTips: true,
// }
//
// const allTipsDisabled: UpdatedTips = {
//   allTips: false,
// }
//
// const documentTips: UpdatedTips = {
//   documentTip: true
// }
//
// export function allTips(checked: UpdatedTips): void {
//   if (checked.allTips) {
//     console.log('All tips are enabled')
//     console.log('allTips', checked.allTips)
//     console.log("documentTip", checked.documentTip)
//     console.log('cloudTip', checked.cloudTip)
//   } else {
//     console.log('All tips are disabled')
//   }
// }
//
//
// function mergeTips(allTipsEnabled: UpdatedTips, allTipsDisabled: UpdatedTips, documentTips: UpdatedTips): UpdatedTips {
//   if (allTipsEnabled.allTips) {
//     return {
//       ...allTipsEnabled,
//       ...documentTips
//     }
//   } else {
//     return {
//       ...allTipsDisabled
//     }
//   }
// }
//
// const mergedTips: UpdatedTips = mergeTips(allTipsEnabled, allTipsDisabled, documentTips)
//
// allTips(mergedTips)
// console.log(123)
//
//
