input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.fill_sendBuffer19()
    btf.sendData(btf.btf_sendBuffer19())
    sender.send2x2Motoren(
    btf.btf_sendBuffer19(),
    sender.sender_2MotorenPicker(80, 80, 30),
    sender.sender_2Motoren(btf.speedPicker(25), btf.speedPicker(-25), 198, 198, true, 1),
    4,
    true,
    true,
    btf.e3Abstand.u1
    )
    btf.sendData(btf.btf_sendBuffer19())
    btf.zeige5x5Buffer(btf.btf_sendBuffer19())
    btf.zeige5x5Joystick(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.sendData(btf.btf_sendBuffer19())
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(100, 90, 200),
    null,
    sender.sender_1MotorPicker(-50, 90, 50),
    null,
    null,
    1,
    true,
    true,
    btf.e3Abstand.u0
    )
    btf.sendData(btf.btf_sendBuffer19())
    btf.zeige5x5Buffer(btf.btf_sendBuffer19())
    btf.zeige5x5Joystick(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.sendData(btf.btf_sendBuffer19())
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(-50, 90, 50),
    null,
    null,
    null,
    null,
    1,
    true,
    true,
    btf.e3Abstand.u1
    )
    btf.sendData(btf.btf_sendBuffer19())
    btf.zeige5x5Buffer(btf.btf_sendBuffer19())
    btf.zeige5x5Joystick(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
	
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
	
})
sender.beimStart(true, btf.eFunkgruppe.b1)
