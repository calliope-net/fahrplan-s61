input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.sendData(btf.btf_sendBuffer19())
    btf.comment(btf.btf_text("vor und zurück OK"))
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(100, 90, 100),
    sender.sender_1MotorPicker(-40, 90, 100),
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
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.sendData(btf.btf_sendBuffer19())
    btf.comment(btf.btf_text("2 Motoren: Callibot Quadrat fahren, 198 Impulse = viertel Drehung OK"))
    sender.send2x2Motoren(
    btf.btf_sendBuffer19(),
    sender.sender_2MotorenPicker(80, 80, 30),
    sender.sender_2Motoren(btf.speedPicker(25), btf.speedPicker(-25), 198, 198, true, 1),
    4,
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
    btf.comment(btf.btf_text("rückwärts einparken OK"))
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(60, 90, 30),
    sender.sender_1MotorPicker(-50, 180, 20),
    sender.sender_1MotorPicker(-50, 0, 20),
    sender.sender_1MotorPicker(-60, 90, 20),
    sender.sender_1MotorPicker(60, 90, 30),
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
    btf.fill_sendBuffer19()
    btf.sendData(btf.btf_sendBuffer19())
    btf.comment(btf.btf_text("MKC 5 Strecken mit Kreis"))
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(25, 175, 20),
    sender.sender_1MotorPicker(-25, 175, 20),
    sender.sender_1MotorPicker(50, 90, 20),
    sender.sender_1MotorPicker(30, 18, 160),
    sender.sender_1MotorPicker(-50, 90, 20),
    1,
    true,
    true,
    btf.e3Abstand.u1
    )
    btf.sendData(btf.btf_sendBuffer19())
    btf.zeige5x5Buffer(btf.btf_sendBuffer19())
    btf.zeige5x5Joystick(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
	
})
sender.beimStart(false, btf.eFunkgruppe.b2)
btf.zeigeFunkgruppe()
