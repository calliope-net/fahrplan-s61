input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
    btf.sendData(btf.btf_sendBuffer19())
    sender.send2Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_1MotorPicker(50, 90, 50),
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
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
    btf.sendData(btf.btf_sendBuffer19())
    sender.send2x2Motoren(
    btf.btf_sendBuffer19(),
    sender.sender_2MotorenPicker(80, 80, 25),
    sender.sender_2Motoren(btf.speedPicker(25), btf.speedPicker(-25), 198, 198, true, 1),
    4,
    true,
    true,
    btf.e3Abstand.u1
    )
    btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.ma, true)
    btf.sendData(btf.btf_sendBuffer19())
    btf.zeige5x5Buffer(btf.btf_sendBuffer19())
    btf.zeige5x5Joystick(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
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
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
sender.beimStart(true)
