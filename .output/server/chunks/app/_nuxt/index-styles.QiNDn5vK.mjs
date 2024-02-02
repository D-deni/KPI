const main = '.dp__input_wrap{box-sizing:unset;position:relative;width:100%}.dp__input_wrap:focus{border-color:var(--dp-border-color-hover);outline:none}.dp__input{background-color:var(--dp-background-color);border:1px solid var(--dp-border-color);border-radius:4px;border-radius:var(--dp-border-radius);box-sizing:border-box;color:var(--dp-text-color);font-family:-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen,ubuntu,cantarell,Open Sans,Helvetica Neue,sans-serif;font-family:var(--dp-font-family);font-size:1rem;font-size:var(--dp-font-size);line-height:1.5rem;line-height:calc(var(--dp-font-size)*1.5);outline:none;padding:6px 30px 6px 12px;padding:var(--dp-input-padding);transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.dp__input::-moz-placeholder{opacity:.7}.dp__input::placeholder{opacity:.7}.dp__input:hover{border-color:var(--dp-border-color-hover)}.dp__input_reg{caret-color:transparent}.dp__input_focus{border-color:var(--dp-border-color-hover)}.dp__disabled{background:var(--dp-disabled-color)}.dp__disabled::-moz-placeholder{color:var(--dp-disabled-color-text)}.dp__disabled::placeholder{color:var(--dp-disabled-color-text)}.dp__input_icons{display:inline-block;height:1rem;height:var(--dp-font-size);width:1rem;width:var(--dp-font-size);stroke-width:0;box-sizing:content-box;color:var(--dp-icon-color);font-size:1rem;font-size:var(--dp-font-size);line-height:1.5rem;line-height:calc(var(--dp-font-size)*1.5);padding:6px 12px}.dp__input_icon{left:0}.dp__clear_icon,.dp__input_icon{color:var(--dp-icon-color);cursor:pointer;position:absolute;top:50%;transform:translateY(-50%)}.dp__clear_icon{right:0}.dp__input_icon_pad{padding-left:35px;padding-left:var(--dp-input-icon-padding)}.dp__input_valid{box-shadow:0 0 4px var(--dp-success-color);box-shadow:0 0 var(--dp-border-radius) var(--dp-success-color)}.dp__input_valid,.dp__input_valid:hover{border-color:var(--dp-success-color)}.dp__input_invalid{box-shadow:0 0 4px var(--dp-danger-color);box-shadow:0 0 var(--dp-border-radius) var(--dp-danger-color)}.dp__input_invalid,.dp__input_invalid:hover{border-color:var(--dp-danger-color)}.dp__menu{background:var(--dp-background-color);border:1px solid var(--dp-menu-border-color);border-radius:4px;border-radius:var(--dp-border-radius);font-family:-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen,ubuntu,cantarell,Open Sans,Helvetica Neue,sans-serif;font-family:var(--dp-font-family);font-size:1rem;font-size:var(--dp-font-size);min-width:260px;min-width:var(--dp-menu-min-width);position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.dp__menu,.dp__menu:after,.dp__menu:before{box-sizing:border-box}.dp__menu:focus{border:1px solid var(--dp-menu-border-color);outline:none}.dp__menu_inner{padding:6px 8px;padding:var(--dp-menu-padding)}.dp__menu_index{z-index:99999}.dp__menu_disabled,.dp__menu_readonly{inset:0;position:absolute;z-index:1}.dp__menu_disabled{background:hsla(0,0%,100%,.5);cursor:not-allowed}.dp__menu_readonly{background:transparent;cursor:default}.dp__arrow_top{border-left:1px solid var(--dp-menu-border-color);border-top:1px solid var(--dp-menu-border-color);top:-1px;transform:translate(-50%,-50%) rotate(45deg)}.dp__arrow_bottom,.dp__arrow_top{background-color:var(--dp-background-color);height:12px;left:50%;position:absolute;width:12px}.dp__arrow_bottom{border-bottom:1px solid var(--dp-menu-border-color);border-right:1px solid var(--dp-menu-border-color);bottom:-1px;transform:translate(-50%,50%) rotate(45deg)}.dp__action_extra{padding:2px 0;text-align:center}.dp__preset_ranges,.dp__sidebar_left{border-right:1px solid var(--dp-border-color);padding:5px}.dp__sidebar_right{border-left:1px solid var(--dp-border-color);padding:5px}.dp__preset_range{border-radius:4px;border-radius:var(--dp-border-radius);color:var(--dp-text-color);display:block;padding:5px;transition:all .1s ease-in;transition:var(--dp-common-transition);white-space:nowrap}.dp__preset_range:hover{background-color:var(--dp-hover-color);cursor:pointer}.dp__menu_content_wrapper{display:flex}.dp__calendar_header{align-items:center;color:var(--dp-text-color);display:flex;font-weight:700;justify-content:center;position:relative;white-space:nowrap}.dp__calendar_header_item{box-sizing:border-box;flex-grow:1;height:35px;height:var(--dp-cell-size);padding:5px;padding:var(--dp-cell-padding);text-align:center;width:35px;width:var(--dp-cell-size)}.dp__calendar_row{align-items:center;display:flex;justify-content:center;margin:5px 0;margin:var(--dp-row-maring)}.dp__calendar_item{box-sizing:border-box;color:var(--dp-text-color);flex-grow:1;text-align:center}.dp__calendar{position:relative}.dp__calendar_header_cell{border-bottom:thin solid var(--dp-border-color);padding:.5rem;padding:var(--dp-calendar-header-cell-padding)}.dp__cell_inner{align-items:center;border:1px solid transparent;border-radius:4px;border-radius:var(--dp-cell-border-radius);box-sizing:border-box;display:flex;height:35px;height:var(--dp-cell-size);justify-content:center;padding:5px;padding:var(--dp-cell-padding);position:relative;text-align:center;width:35px;width:var(--dp-cell-size)}.dp__cell_inner:hover{transition:all .2s}.dp__cell_auto_range_start,.dp__date_hover_start:hover,.dp__range_start{border-bottom-right-radius:0;border-top-right-radius:0}.dp__cell_auto_range_end,.dp__date_hover_end:hover,.dp__range_end{border-bottom-left-radius:0;border-top-left-radius:0}.dp__active_date,.dp__range_end,.dp__range_start{background:var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp__cell_auto_range_end,.dp__cell_auto_range_start{border-bottom:1px dashed var(--dp-primary-color);border-top:1px dashed var(--dp-primary-color)}.dp__date_hover:hover,.dp__date_hover_end:hover,.dp__date_hover_start:hover{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp__cell_disabled,.dp__cell_offset{color:var(--dp-secondary-color)}.dp__cell_disabled{cursor:not-allowed}.dp__range_between{background:var(--dp-hover-color);border:1px solid var(--dp-hover-color);border-radius:0}.dp__range_between_week{background:var(--dp-primary-color);border-bottom:1px solid var(--dp-primary-color);border-radius:0;border-top:1px solid var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp__today{border:1px solid var(--dp-primary-color)}.dp__week_num{color:var(--dp-secondary-color);text-align:center}.dp__cell_auto_range{border-bottom:1px dashed var(--dp-primary-color);border-radius:0;border-top:1px dashed var(--dp-primary-color)}.dp__cell_auto_range_start{border-left:1px dashed var(--dp-primary-color)}.dp__cell_auto_range_end{border-right:1px dashed var(--dp-primary-color)}.dp__calendar_header_separator{background:var(--dp-border-color);height:1px;width:100%}.dp__calendar_next{margin-left:10px;margin-left:var(--dp-multi-calendars-spacing)}.dp__marker_dot,.dp__marker_line{background-color:var(--dp-marker-color);bottom:0;height:5px;position:absolute}.dp__marker_dot{border-radius:50%;left:50%;transform:translateX(-50%);width:5px}.dp__marker_line{left:0;width:100%}.dp__marker_tooltip{background-color:var(--dp-tooltip-color);border:1px solid var(--dp-border-color);border-radius:4px;border-radius:var(--dp-border-radius);box-sizing:border-box;cursor:default;padding:5px;position:absolute;z-index:99999}.dp__tooltip_content{white-space:nowrap}.dp__tooltip_text{align-items:center;color:var(--dp-text-color);display:flex;flex-flow:row nowrap}.dp__tooltip_mark{background-color:var(--dp-text-color);border-radius:50%;color:var(--dp-text-color);height:5px;margin-right:5px;width:5px}.dp__arrow_bottom_tp{background-color:var(--dp-tooltip-color);border-bottom:1px solid var(--dp-border-color);border-right:1px solid var(--dp-border-color);bottom:0;height:8px;position:absolute;transform:translate(-50%,50%) rotate(45deg);width:8px}.dp__instance_calendar{position:relative;width:100%}@media only screen and (width <= 600px){.dp__flex_display{flex-direction:column}}.dp__cell_highlight{background-color:var(--dp-highlight-color)}.dp__month_year_row{align-items:center;box-sizing:border-box;color:var(--dp-text-color);display:flex;height:35px;height:var(--dp-month-year-row-height)}.dp__inner_nav{align-items:center;border-radius:50%;color:var(--dp-icon-color);cursor:pointer;display:flex;height:25px;height:var(--dp-month-year-row-button-size);justify-content:center;text-align:center;width:25px;width:var(--dp-month-year-row-button-size)}.dp__inner_nav svg{height:20px;height:var(--dp-button-icon-height);width:20px;width:var(--dp-button-icon-height)}.dp__inner_nav:hover{background:var(--dp-hover-color);color:var(--dp-hover-icon-color)}.dp__inner_nav_disabled,.dp__inner_nav_disabled:hover{background:var(--dp-disabled-color);color:var(--dp-disabled-color-text);cursor:not-allowed}.dp__month_year_select{align-items:center;border-radius:4px;border-radius:var(--dp-border-radius);box-sizing:border-box;color:var(--dp-text-color);cursor:pointer;display:flex;height:35px;height:var(--dp-month-year-row-height);justify-content:center;text-align:center;width:50%}.dp__month_year_select:hover{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp__month_year_wrap{display:flex;width:100%}.dp__year_disable_select{justify-content:space-around}.dp__overlay{background:var(--dp-background-color);box-sizing:border-box;color:var(--dp-text-color);font-family:-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen,ubuntu,cantarell,Open Sans,Helvetica Neue,sans-serif;font-family:var(--dp-font-family);height:100%;left:0;position:absolute;top:0;transition:opacity 1s ease-out;width:100%;z-index:99999}.dp__overlay_container::-webkit-scrollbar-track{background-color:var(--dp-scroll-bar-background);box-shadow:var(--dp-scroll-bar-background)}.dp__overlay_container::-webkit-scrollbar{background-color:var(--dp-scroll-bar-background);width:5px}.dp__overlay_container::-webkit-scrollbar-thumb{background-color:var(--dp-scroll-bar-color);border-radius:10px}.dp__overlay:focus{border:none;outline:none}.dp__container_flex{display:flex}.dp__container_block{display:block}.dp__overlay_container{flex-direction:column;overflow-y:auto}.dp__time_picker_overlay_container{height:100%}.dp__overlay_row{align-items:center;box-sizing:border-box;display:flex;flex-wrap:wrap;margin-left:auto;margin-right:auto;max-width:100%;padding:0;width:100%}.dp__flex_row{flex:1}.dp__overlay_col{box-sizing:border-box;padding:3px;padding:var(--dp-overlay-col-padding);white-space:nowrap;width:33%}.dp__overlay_cell_pad{padding:10px 0;padding:var(--dp-common-padding) 0}.dp__overlay_cell_active{background:var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp__overlay_cell,.dp__overlay_cell_active{border-radius:4px;border-radius:var(--dp-border-radius);cursor:pointer;text-align:center}.dp__cell_in_between,.dp__overlay_cell:hover{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp__over_action_scroll{box-sizing:border-box;right:5px}.dp__overlay_cell_disabled{cursor:not-allowed}.dp__overlay_cell_disabled,.dp__overlay_cell_disabled:hover{background:var(--dp-disabled-color)}.dp__overlay_cell_active_disabled{cursor:not-allowed}.dp__overlay_cell_active_disabled,.dp__overlay_cell_active_disabled:hover{background:var(--dp-primary-disabled-color)}.dp__month_picker_header{height:35px;height:var(--dp-cell-size);justify-content:space-between}.dp__month_picker_header,.dp__time_input{align-items:center;display:flex;width:100%}.dp__time_input{color:var(--dp-text-color);font-family:-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen,ubuntu,cantarell,Open Sans,Helvetica Neue,sans-serif;font-family:var(--dp-font-family);justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.dp__time_col_reg_block{padding:0 20px}.dp__time_col_reg_inline{padding:0 10px}.dp__time_col_reg_with_button{padding:0 15px}.dp__time_col_sec{padding:0 10px}.dp__time_col_sec_with_button{padding:0 5px}.dp__time_col{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:center}.dp__time_col_block{font-size:2rem;font-size:var(--dp-time-font-size)}.dp__time_display{align-items:center;border-radius:4px;border-radius:var(--dp-border-radius);color:var(--dp-text-color);cursor:pointer;display:flex;justify-content:center}.dp__time_display:hover{background:var(--dp-hover-color);color:var(--dp-hover-text-color)}.dp__time_display_block{padding:0 3px}.dp__time_display_inline{padding:5px}.dp__time_picker_inline_container{display:flex;justify-content:center;width:100%}.dp__inc_dec_button{align-items:center;border-radius:50%;box-sizing:border-box;color:var(--dp-icon-color);cursor:pointer;display:flex;justify-content:center;margin:0;padding:5px}.dp__inc_dec_button,.dp__inc_dec_button svg{height:32px;height:var(--dp-time-inc-dec-button-size);width:32px;width:var(--dp-time-inc-dec-button-size)}.dp__inc_dec_button:hover{background:var(--dp-hover-color);color:var(--dp-primary-color)}.dp__inc_dec_button_inline{align-items:center;cursor:pointer;display:flex;height:8px;padding:0;width:100%}.dp__inc_dec_button_disabled,.dp__inc_dec_button_disabled:hover{background:var(--dp-disabled-color);color:var(--dp-disabled-color-text);cursor:not-allowed}.dp__pm_am_button{background:var(--dp-primary-color);border:none;border-radius:4px;border-radius:var(--dp-border-radius);color:var(--dp-primary-text-color);cursor:pointer;padding:10px;padding:var(--dp-common-padding)}.dp__tp_inline_btn_bar{background-color:var(--dp-secondary-color);border-collapse:collapse;height:4px;transition:all .1s ease-in;transition:var(--dp-common-transition);width:100%}.dp__tp_inline_btn_top:hover .dp__tp_btn_in_r{background-color:var(--dp-primary-color);transform:rotate(12deg) scale(1.15) translateY(-2px)}.dp__tp_inline_btn_bottom:hover .dp__tp_btn_in_r,.dp__tp_inline_btn_top:hover .dp__tp_btn_in_l{background-color:var(--dp-primary-color);transform:rotate(-12deg) scale(1.15) translateY(-2px)}.dp__tp_inline_btn_bottom:hover .dp__tp_btn_in_l{background-color:var(--dp-primary-color);transform:rotate(12deg) scale(1.15) translateY(-2px)}.dp__action_row{align-items:center;box-sizing:border-box;color:var(--dp-text-color);display:flex;flex-flow:row nowrap;padding:10px;padding:var(--dp-common-padding);width:100%}.dp__action_row svg{height:20px;height:var(--dp-button-icon-height);width:auto}.dp__selection_preview{color:var(--dp-text-color);display:block;font-size:.8rem;font-size:var(--dp-preview-font-size);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dp__action_buttons{align-items:center;display:flex;flex:0;justify-content:flex-end;margin-left:auto}.dp__action_button{background:transparent;border:1px solid transparent;border-radius:4px;border-radius:var(--dp-border-radius);cursor:pointer;height:22px;height:var(--dp-action-button-height);line-height:normal;margin-left:3px;padding:1px 6px;padding:var(--dp-action-buttons-padding)}.dp__action_select{background:var(--dp-primary-color);color:var(--dp-primary-text-color)}.dp__action_select:hover{background:var(--dp-primary-color);transition:all .2s ease-in;transition:var(--dp-action-row-transtion)}.dp__action_select:disabled{background:var(--dp-primary-disabled-color);cursor:not-allowed}.dp__action_cancel{border:1px solid var(--dp-border-color);color:var(--dp-text-color)}.dp__action_cancel:hover{border-color:var(--dp-primary-color);transition:all .2s ease-in;transition:var(--dp-action-row-transtion)}:root{--dp-common-transition:all 0.1s ease-in;--dp-menu-padding:6px 8px;--dp-animation-duration:0.1s;--dp-menu-appear-transition-timing:cubic-bezier(.4,0,1,1);--dp-transition-timing:ease-out;--dp-action-row-transtion:all 0.2s ease-in;--dp-font-family:-apple-system,blinkmacsystemfont,"Segoe UI",roboto,oxygen,ubuntu,cantarell,"Open Sans","Helvetica Neue",sans-serif;--dp-border-radius:4px;--dp-cell-border-radius:4px;--dp-transition-length:22px;--dp-transition-timing-general:0.1s;--dp-button-height:35px;--dp-month-year-row-height:35px;--dp-month-year-row-button-size:25px;--dp-button-icon-height:20px;--dp-calendar-wrap-padding:0 5px;--dp-cell-size:35px;--dp-cell-padding:5px;--dp-common-padding:10px;--dp-input-icon-padding:35px;--dp-input-padding:6px 30px 6px 12px;--dp-menu-min-width:260px;--dp-action-buttons-padding:1px 6px;--dp-row-maring:5px 0;--dp-calendar-header-cell-padding:0.5rem;--dp-multi-calendars-spacing:10px;--dp-overlay-col-padding:3px;--dp-time-inc-dec-button-size:32px;--dp-font-size:1rem;--dp-preview-font-size:0.8rem;--dp-time-font-size:2rem;--dp-action-button-height:22px}.dp__theme_dark{--dp-background-color:#212121;--dp-text-color:#fff;--dp-hover-color:#484848;--dp-hover-text-color:#fff;--dp-hover-icon-color:#959595;--dp-primary-color:#005cb2;--dp-primary-disabled-color:#61a8ea;--dp-primary-text-color:#fff;--dp-secondary-color:#a9a9a9;--dp-border-color:#2d2d2d;--dp-menu-border-color:#2d2d2d;--dp-border-color-hover:#aaaeb7;--dp-disabled-color:#737373;--dp-disabled-color-text:#d0d0d0;--dp-scroll-bar-background:#212121;--dp-scroll-bar-color:#484848;--dp-success-color:#00701a;--dp-success-color-disabled:#428f59;--dp-icon-color:#959595;--dp-danger-color:#e53935;--dp-marker-color:#e53935;--dp-tooltip-color:#3e3e3e;--dp-highlight-color:rgba(0,92,178,.2)}.dp__theme_light{--dp-background-color:#fff;--dp-text-color:#212121;--dp-hover-color:#f3f3f3;--dp-hover-text-color:#212121;--dp-hover-icon-color:#959595;--dp-primary-color:#1976d2;--dp-primary-disabled-color:#6bacea;--dp-primary-text-color:#f8f5f5;--dp-secondary-color:#c0c4cc;--dp-border-color:#ddd;--dp-menu-border-color:#ddd;--dp-border-color-hover:#aaaeb7;--dp-disabled-color:#f6f6f6;--dp-scroll-bar-background:#f3f3f3;--dp-scroll-bar-color:#959595;--dp-success-color:#76d275;--dp-success-color-disabled:#a3d9b1;--dp-icon-color:#959595;--dp-danger-color:#ff6f60;--dp-marker-color:#ff6f60;--dp-tooltip-color:#fafafa;--dp-disabled-color-text:#8e8e8e;--dp-highlight-color:rgba(25,118,210,.1)}.dp__flex{align-items:center;display:flex}.dp__btn{background:none;border:none;cursor:pointer;font:inherit;line-height:normal;transition:all .1s ease-in;transition:var(--dp-common-transition)}.dp__main{box-sizing:border-box;font-family:-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen,ubuntu,cantarell,Open Sans,Helvetica Neue,sans-serif;font-family:var(--dp-font-family);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.dp__pointer{cursor:pointer}.dp__icon{stroke:currentcolor;fill:currentcolor}.dp__button{align-content:center;align-items:center;box-sizing:border-box;color:var(--dp-icon-color);cursor:pointer;display:flex;height:35px;height:var(--dp-button-height);justify-content:center;padding:10px;padding:var(--dp-common-padding);text-align:center;width:100%}.dp__button.dp__overlay_action{bottom:0;position:absolute}.dp__button:hover{background:var(--dp-hover-color);color:var(--dp-hover-icon-color)}.dp__button svg{height:20px;height:var(--dp-button-icon-height);width:auto}.dp__button_bottom{border-bottom-left-radius:4px;border-bottom-left-radius:var(--dp-border-radius);border-bottom-right-radius:4px;border-bottom-right-radius:var(--dp-border-radius)}.dp__flex_display{display:flex}.dp__flex_display_with_input{align-items:flex-start;flex-direction:column}.dp__relative{position:relative}.calendar-next-enter-active,.calendar-next-leave-active,.calendar-prev-enter-active,.calendar-prev-leave-active{transition:all .1s ease-out;transition:all var(--dp-transition-timing-general) ease-out}.calendar-next-enter-from{opacity:0;transform:translateX(22px);transform:translateX(var(--dp-transition-length))}.calendar-next-leave-to,.calendar-prev-enter-from{opacity:0;transform:translateX(-22px);transform:translateX(calc(var(--dp-transition-length)*-1))}.calendar-prev-leave-to{opacity:0;transform:translateX(22px);transform:translateX(var(--dp-transition-length))}.dp-slide-down-enter-active,.dp-slide-down-leave-active,.dp-slide-up-enter-active,.dp-slide-up-leave-active{transition:all .1s ease-out;transition:all var(--dp-animation-duration) var(--dp-transition-timing)}.dp-slide-down-leave-to,.dp-slide-up-enter-from{opacity:0;transform:translateY(22px);transform:translateY(var(--dp-transition-length))}.dp-slide-down-enter-from,.dp-slide-up-leave-to{opacity:0;transform:translateY(-22px);transform:translateY(calc(var(--dp-transition-length)*-1))}.dp__menu_transitioned{transition:all .1s cubic-bezier(.4,0,1,1);transition:all var(--dp-animation-duration) var(--dp-menu-appear-transition-timing)}';

const TasksContentSearch_vue_vue_type_style_index_0_lang = "@media screen and (max-width:610px){.dp__menu_content_wrapper{display:flex;flex-direction:column}}.dp__action_select{display:none}@keyframes bg{0%{background-size:0 2px,2px 0,0 2px,2px 0}25%{background-size:100% 2px,2px 0,0 2px,2px 0}50%{background-size:100% 2px,2px 100%,0 2px,2px 0}75%{background-size:100% 2px,2px 100%,100% 2px,2px 0}to{background-size:100% 2px,2px 100%,100% 2px,2px 100%}}.box{animation:bg 1.25s cubic-bezier(.19,1,.22,1) 1;animation-play-state:paused;animation-play-state:running;background-image:linear-gradient(90deg,#fff 100%,#fff 0),linear-gradient(180deg,#fff 100%,#fff 0),linear-gradient(90deg,#fff 100%,#fff 0),linear-gradient(180deg,#fff 100%,#fff 0);background-position:0 0,100% 0,100% 100%,0 100%;background-repeat:no-repeat;background-size:100% 2px,2px 100%,100% 2px,2px 100%;border-radius:3px}";

const TheCheckboxCreateUser_vue_vue_type_style_index_0_scoped_6eafa395_lang = '.container[data-v-6eafa395]{cursor:pointer;display:block;font-size:16px;margin-bottom:12px;padding-left:35px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.container input[data-v-6eafa395]{cursor:pointer;height:0;opacity:0;position:absolute;width:0}.checkmark[data-v-6eafa395]{background-color:#eee;height:25px;left:0;position:absolute;top:0;width:25px}.container input~.checkmark[data-v-6eafa395]{border:1px solid #2988c8;border-radius:5px;transition:.3s ease-in-out}.container:hover input~.checkmark[data-v-6eafa395]{background-color:#3498db}.container input:checked~.checkmark[data-v-6eafa395]{background-color:#2988c8}.checkmark[data-v-6eafa395]:after{content:"";display:none;position:absolute}.container input:checked~.checkmark[data-v-6eafa395]:after{display:block}.container .checkmark[data-v-6eafa395]:after{border:solid #fff;border-width:0 3px 3px 0;height:10px;left:9px;top:5px;transform:rotate(45deg);width:5px}';

const TasksContent_vue_vue_type_style_index_0_lang = "*{scroll-behavior:smooth}.active-page{background-color:#3498db;border:1px solid #3498db;color:#fff}.active-page:hover{background-color:#2988c8}.slide-enter-active,.slide-leave-active{transition:all .75s ease-out}.slide-enter-to{position:absolute;right:0}.slide-enter-from{position:absolute;right:-100%}.slide-leave-to{left:-100%;position:absolute}.slide-leave-from{left:0;position:absolute}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(0,0,0,.7);transform:scale(.95)}70%{box-shadow:0 0 0 10px transparent;transform:scale(1)}to{box-shadow:0 0 0 0 transparent;transform:scale(.95)}}";

const indexStyles_QiNDn5vK = [main, TasksContentSearch_vue_vue_type_style_index_0_lang, TheCheckboxCreateUser_vue_vue_type_style_index_0_scoped_6eafa395_lang, TasksContent_vue_vue_type_style_index_0_lang];

export { indexStyles_QiNDn5vK as default };
//# sourceMappingURL=index-styles.QiNDn5vK.mjs.map
