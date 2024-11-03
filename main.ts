function r_ckw_rts_einparken () {
    btf.comment(btf.btf_text("rückwärts einparken"))
    sender.send5Strecken(
    btf.btf_sendBuffer19(),
    true,
    1,
    true,
    btf.e3Abstand.u1,
    sender.sender_1MotorPicker(60, 90, 30),
    sender.sender_1MotorPicker(-50, 180, 20),
    sender.sender_1MotorPicker(-50, 0, 20),
    sender.sender_1MotorPicker(-60, 90, 20),
    sender.sender_1MotorPicker(60, 90, 30)
    )
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (plan > 0) {
        plan += -1
    }
    basic.showNumber(plan)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (plan == 0) {
        nur_2_Strecken_vor_und_zur_ck()
    } else if (plan == 1) {
        r_ckw_rts_einparken()
    } else if (plan == 2) {
        Callibot_5_Strecken_mit_Kreis()
    } else if (plan == 3) {
        MKC_5_Strecken_mit_Kreis()
    } else if (plan == 4) {
        _2_Motoren_Callibot_Quadrat_fahren()
    }
    btf.sendData(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (plan < 4) {
        plan += 1
    }
    basic.showNumber(plan)
})
function Callibot_5_Strecken_mit_Kreis () {
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(50, 180, 40),
    sender.sender_1MotorPicker(-50, 180, 40),
    sender.sender_1MotorPicker(100, 90, 20),
    sender.sender_1MotorPicker(50, 0, 95),
    sender.sender_1MotorPicker(-100, 90, 20),
    1,
    true,
    true,
    btf.e3Abstand.u1
    )
}
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
    btf.zeigeFunkgruppe()
})
function _2_Motoren_Callibot_Quadrat_fahren () {
    btf.comment(btf.btf_text("2 Motoren: Callibot Quadrat fahren, Encoder 198 Impulse = viertel Drehung"))
    sender.send2Motoren(
    btf.btf_sendBuffer19(),
    true,
    4,
    true,
    btf.e3Abstand.u1,
    sender.sender_2MotorenPicker(80, 80, 30),
    sender.sender_2Motoren(btf.speedPicker(25), btf.speedPicker(-25), 198, 198, true, 1)
    )
}
function MKC_5_Strecken_mit_Kreis () {
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(25, 175, 20),
    sender.sender_1MotorPicker(-25, 175, 20),
    sender.sender_1MotorPicker(50, 90, 20),
    sender.sender_1MotorPicker(30, 15, 160),
    sender.sender_1MotorPicker(-50, 90, 20),
    1,
    true,
    true,
    btf.e3Abstand.u1
    )
}
function nur_2_Strecken_vor_und_zur_ck () {
    sender.send5Strecken(
    btf.btf_sendBuffer19(),
    true,
    1,
    true,
    btf.e3Abstand.u1,
    sender.sender_1MotorPicker(100, 90, 100),
    sender.sender_1MotorPicker(-40, 90, 100)
    )
}
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
    btf.zeigeFunkgruppe()
})
let plan = 0
sender.beimStart(false)
btf.zeigeFunkgruppe()
plan = 0
