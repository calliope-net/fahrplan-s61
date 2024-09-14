input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
    btf.sendData(btf.btf_sendBuffer19())
    sender.send20Strecken(
    btf.btf_sendBuffer19(),
    sender.sender_StreckePicker(50, 180, 30, false),
    sender.sender_StreckePicker(-50, 180, 30, false),
    sender.sender_StreckePicker(100, 90, 20, false),
    sender.sender_StreckePicker(50, 0, 115, false),
    sender.sender_StreckePicker(-100, 90, 20, false),
    1
    )
    btf.setAbstand(btf.btf_sendBuffer19(), btf.e3Abstand.u0)
    btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.m1, true)
    btf.sendData(btf.btf_sendBuffer19())
    btf.zeige5x5Buffer(btf.btf_sendBuffer19())
    btf.zeige5x5Joystick(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.fill_sendBuffer19()
    btf.setBetriebsart(btf.btf_sendBuffer19(), btf.e0Betriebsart.p2Fahrplan)
    btf.sendData(btf.btf_sendBuffer19())
    sender.send2x2Motoren(
    btf.btf_sendBuffer19(),
    sender.sender_2MotorenZeitPicker(80, 80, 20, 1, false),
    sender.sender_2MotorenEncoder(btf.speedPicker(25), btf.speedPicker(-25), 198, 198, 1, true),
    4
    )
    btf.setaktiviert(btf.btf_sendBuffer19(), btf.e3aktiviert.ma, true)
    btf.sendData(btf.btf_sendBuffer19())
    btf.zeige5x5Buffer(btf.btf_sendBuffer19())
    btf.zeige5x5Joystick(btf.btf_sendBuffer19())
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
sender.beimStart()
