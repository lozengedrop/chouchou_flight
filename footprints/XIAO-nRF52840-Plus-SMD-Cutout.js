module.exports = {
	params: {
		designator: 'MCU',
		side: 'F',
		flipx: false,
		BATp: {type: 'net', value: 'RAW'},
		BATn: {type: 'net', value: 'GND'},
		CLK: {type: 'net', value: 'CLK'},
		DIO: {type: 'net', value: 'DIO'},
		GND: {type: 'net', value: 'GND'},
		RST: {type: 'net', value: 'RST'},
		VCC5: {type: 'net', value: 'VCC'},
		VCC3: {type: 'net', value: 'VCC'},
		D0: {type: 'net', value: 'D0'},
		D1: {type: 'net', value: 'D1'},
		D2: {type: 'net', value: 'D2'},
		D3: {type: 'net', value: 'D3'},
		D4: {type: 'net', value: 'D4'},
		D5: {type: 'net', value: 'D5'},
		D6: {type: 'net', value: 'D6'},
		D7: {type: 'net', value: 'D7'},
		D8: {type: 'net', value: 'D8'},
		D9: {type: 'net', value: 'D9'},
		D10: {type: 'net', value: 'D10'},
		D11: {type: 'net', value: 'D11'},
		D12: {type: 'net', value: 'D12'},
		D13: {type: 'net', value: 'D13'},
		D14: {type: 'net', value: 'D14'},
		D15: {type: 'net', value: 'D15'},
		D16: {type: 'net', value: 'D16'},
		D17: {type: 'net', value: 'D17'},
		D18: {type: 'net', value: 'D18'},
		D19: {type: 'net', value: 'D19'},
	},
	body: p => {
		const x_mir = (x) => (p.flipx ? (-x) : x);
		const r_mir = (r) => p.flipx ? (r + 180) % 360 : r;
		const pad1_14_angle = r_mir(180); // Rotation for pads on the left/right side
		const pad15_20_angle = p.flipx ? 0 : 180; // Rotation for inner pads on left side
		const pad21_23_angle = p.flipx ? 180 : 0; // Rotation for inner pads on right side

		return `
		(footprint "XIAO-nRF52840-Plus-SMD-Cutout"
		(version 20241229)
		(generator "pcbnew")
		(generator_version "9.0")
		(layer "${p.side}.Cu")
		${p.at /* parametric position */}
		(property "Reference" "REF**"
		(at ${x_mir(0)} -0.5 0)
		(unlocked yes)
		(layer "${p.side}.SilkS")
		(hide yes)
		(uuid "10043ad6-ddbc-46eb-8927-6b9051fd8042")
		(effects
		(font (size 1 1) (thickness 0.1))
		)
		)
		(property "Value" "XIAO-nRF52840-Plus-SMD-Cutout"
		(at ${x_mir(0)} 1 0)
		(unlocked yes)
		(layer "${p.side}.Fab")
		(hide yes)
		(uuid "5533098b-b59a-4542-b0f9-9a05e13a0532")
		(effects
		(font (size 1 1) (thickness 0.15))
		)
		)
		(property "Datasheet" ""
		(at ${x_mir(0)} 0 0)
		(unlocked yes)
		(layer "${p.side}.Fab")
		(hide yes)
		(uuid "f04895a5-7fcd-4b8b-a495-6f45c67543e0")
		(effects
		(font (size 1 1) (thickness 0.15))
		)
		)
		(property "Description" ""
		(at ${x_mir(0)} 0 0)
		(unlocked yes)
		(layer "${p.side}.Fab")
		(hide yes)
		(uuid "771969c3-c3f6-4536-995b-4632f26f3da3")
		(effects
		(font (size 1 1) (thickness 0.15))
		)
		)
		(attr smd exclude_from_pos_files)
		(fp_line
		(start ${x_mir(-8.931247)} 8.69166)
		(end ${x_mir(-8.931247)} -8.45334)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "8b245137-e3d1-47da-acb0-0e91fa7b1015")
		)
		(fp_line
		(start ${x_mir(-7.026247)} 10.59666)
		(end ${x_mir(6.943753)} 10.59666)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "369f3500-e877-4b25-83d5-0e4647e3f6c3")
		)
		(fp_line
		(start ${x_mir(-4.536247)} -10.35834)
		(end ${x_mir(-4.532519)} -11.368612)
		(stroke (width 0.127) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "5973f47c-8b14-410e-8e3c-ca49170d9131")
		)
		(fp_line
		(start ${x_mir(-4.032519)} -11.86834)
		(end ${x_mir(3.962753)} -11.86834)
		(stroke (width 0.127) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "051ef289-8108-4da7-ad55-27e1d05891dd")
		)
		(fp_line
		(start ${x_mir(4.462753)} -11.36834)
		(end ${x_mir(4.462753)} -10.35834)
		(stroke (width 0.127) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "d3b0e284-3cad-47c1-a540-7dd30cbdee22")
		)
		(fp_line
		(start ${x_mir(6.943753)} -10.35834)
		(end ${x_mir(-7.026247)} -10.35834)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "63a17afa-b892-4ba3-aca1-70b6f5b5125f")
		)
		(fp_line
		(start ${x_mir(8.848753)} 8.69166)
		(end ${x_mir(8.848753)} -8.45334)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "d533bb97-44aa-460f-8343-a799d3a89ac4")
		)
		(fp_arc
		(start ${x_mir(-8.931247)} -8.45734)
		(mid ${x_mir(-8.373285)} -9.804378)
		(end ${x_mir(-7.026247)} -10.36234)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "a5fea3cb-308a-4300-9642-44569c866fdb")
		)
		(fp_arc
		(start ${x_mir(-7.026247)} 10.59666)
		(mid ${x_mir(-8.373285)} 10.038698)
		(end ${x_mir(-8.931247)} 8.69166)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "e941e0a9-8ef6-4f29-8763-b860222e7dc2")
		)
		(fp_arc
		(start ${x_mir(-4.532519)} -11.368612)
		(mid ${x_mir(-4.385975)} -11.72198)
		(end ${x_mir(-4.032519)} -11.86834)
		(stroke (width 0.127) (type default))
		(layer "${p.side}.SilkS")
		(uuid "069d3274-4fdc-4c28-be28-40e52e8efb75")
		)
		(fp_arc
		(start ${x_mir(3.962753)} -11.86834)
		(mid ${x_mir(4.316277)} -11.721864)
		(end ${x_mir(4.462753)} -11.36834)
		(stroke (width 0.127) (type default))
		(layer "${p.side}.SilkS")
		(uuid "8de24ec4-014c-481d-8310-4fcacf44a489")
		)
		(fp_arc
		(start ${x_mir(6.943753)} -10.35834)
		(mid ${x_mir(8.290777)} -9.800364)
		(end ${x_mir(8.848753)} -8.45334)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "91f0233a-f978-4074-afd3-a5d98a6b9ef7")
		)
		(fp_arc
		(start ${x_mir(8.848753)} 8.69166)
		(mid ${x_mir(8.290791)} 10.038698)
		(end ${x_mir(6.943753)} 10.59666)
		(stroke (width 0.1) (type solid))
		(layer "${p.side}.SilkS")
		(uuid "6d5ea1b8-c423-4b5a-9c9d-7caec8fa0bfe")
		)
		(fp_circle
		(center ${x_mir(-7.867247)} -9.22534)
		(end ${x_mir(-7.867247)} -9.47934)
		(stroke (width 0.5) (type solid))
		(fill yes)
		(layer "${p.side}.SilkS")
		(uuid "f4e90662-012f-4e11-92e2-b788cd0bdefd")
		)
		(fp_line
		(start ${x_mir(-1.524)} -6.288893)
		(end ${x_mir(-1.524)} -7.965293)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "35b7e6da-2288-443a-8cc7-cafc8493ae8d")
		)
		(fp_line
		(start ${x_mir(-1.263)} 5.8)
		(end ${x_mir(-1.263)} 4.1998)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "77b0bfa5-876e-4841-b389-c0431ff772ae")
		)
		(fp_line
		(start ${x_mir(-0.882)} 3.8188)
		(end ${x_mir(0.769)} 3.8188)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "6db859c1-8ebf-42db-91a6-9d26eea6c164")
		)
		(fp_line
		(start ${x_mir(-0.8382)} -8.651093)
		(end ${x_mir(0.8382)} -8.651093)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "9d755b02-baac-4a04-855c-962a59bbb58f")
		)
		(fp_line
		(start ${x_mir(-0.8382)} -5.603093)
		(end ${x_mir(0.8382)} -5.603093)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "0210cc3c-b920-4059-b0d8-0f6f0738563c")
		)
		(fp_line
		(start ${x_mir(0.4642)} 6.4858)
		(end ${x_mir(-0.5772)} 6.4858)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "b8917a09-d36d-4887-a892-d971ebadb511")
		)
		(fp_line
		(start ${x_mir(1.15)} 4.1998)
		(end ${x_mir(1.15)} 5.8)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "cb613984-107c-4dbe-92c7-f199d1a8bf04")
		)
		(fp_line
		(start ${x_mir(1.524)} -6.288893)
		(end ${x_mir(1.524)} -7.965293)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "25cbf5e7-7321-4d97-96b7-f1aec332d13a")
		)
		(fp_arc
		(start ${x_mir(-1.524)} -6.288893)
		(mid ${x_mir(-0.920391)} -6.206702)
		(end ${x_mir(-0.8382)} -5.603093)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "8514254c-4079-46a6-9ce1-3ff9911d62a8")
		)
		(fp_arc
		(start ${x_mir(-1.263)} 4.1998)
		(mid ${x_mir(-1.151408)} 3.930392)
		(end ${x_mir(-0.882)} 3.8188)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "6408400d-fd88-4078-89f5-0b8fc2443662")
		)
		(fp_arc
		(start ${x_mir(-1.263)} 5.8)
		(mid ${x_mir(-0.659391)} 5.882191)
		(end ${x_mir(-0.5772)} 6.4858)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "141a90c2-a7fd-4182-b5df-b821b59f1017")
		)
		(fp_arc
		(start ${x_mir(-0.8382)} -8.651093)
		(mid ${x_mir(-0.920391)} -8.047484)
		(end ${x_mir(-1.524)} -7.965293)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "13478f22-6a72-41ec-a6d9-cfd01a107f65")
		)
		(fp_arc
		(start ${x_mir(0.4642)} 6.4858)
		(mid ${x_mir(0.546391)} 5.882191)
		(end ${x_mir(1.15)} 5.8)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "b42786cc-2fbd-46d5-ab26-fe9a599bf1bd")
		)
		(fp_arc
		(start ${x_mir(0.769)} 3.8188)
		(mid ${x_mir(1.038408)} 3.930392)
		(end ${x_mir(1.15)} 4.1998)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "e31cfd3d-e641-4357-a61b-46489fa7b884")
		)
		(fp_arc
		(start ${x_mir(0.8382)} -5.603093)
		(mid ${x_mir(0.920391)} -6.206702)
		(end ${x_mir(1.524)} -6.288893)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "a95406ad-11c9-43a2-a724-1788307f0780")
		)
		(fp_arc
		(start ${x_mir(1.524)} -7.965293)
		(mid ${x_mir(0.920393)} -8.047486)
		(end ${x_mir(0.8382)} -8.651093)
		(stroke (width 0.12) (type solid))
		(layer "Edge.Cuts")
		(uuid "a7cda1cb-777e-4290-950d-34db2da1ecd8")
		)
		(fp_rect
		(start ${x_mir(-8.941247)} -10.36734)
		(end ${x_mir(8.858753)} 10.58266)
		(stroke (width 0.05) (type default))
		(fill no)
		(layer "${p.side}.CrtYd")
		(uuid "5485e3d8-9c64-4bc3-807b-33af53f841b7")
		)
		(fp_rect
		(start ${x_mir(-8.941247)} -10.36734)
		(end ${x_mir(8.858753)} 10.58266)
		(stroke (width 0.1) (type default))
		(fill no)
		(layer "${p.side}.Fab")
		(uuid "5d03b9e6-559b-4cf5-aa65-928c2ee0e88e")
		)
		(fp_line
		(start ${x_mir(-8.931247)} 8.69166)
		(end ${x_mir(-8.931247)} -8.45334)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "643219b1-f765-41e3-b382-85fe3878615b")
		)
		(fp_line
		(start ${x_mir(-7.026247)} 10.59666)
		(end ${x_mir(6.943753)} 10.59666)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "d07b87e2-3869-4c7a-8d2c-01869a01703b")
		)
		(fp_line
		(start ${x_mir(6.943753)} -10.35834)
		(end ${x_mir(-7.026247)} -10.35834)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "951fbb72-f26d-491e-9802-67c70006abe2")
		)
		(fp_line
		(start ${x_mir(8.848753)} 8.69166)
		(end ${x_mir(8.848753)} -8.45334)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "e1debbb0-cd42-4620-8b02-6e51566216b5")
		)
		(fp_rect
		(start ${x_mir(-3.851247)} -11.88234)
		(end ${x_mir(3.768753)} -5.53234)
		(stroke (width 0.0762) (type default))
		(fill no)
		(layer "User.1")
		(uuid "98d89ff7-d395-47d1-a3d2-7003cd4795c9")
		)
		(fp_arc
		(start ${x_mir(-8.931247)} -8.45334)
		(mid ${x_mir(-8.373285)} -9.800378)
		(end ${x_mir(-7.026247)} -10.35834)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "4c4b7ac6-2b84-4bdb-b6b6-99960ac87a81")
		)
		(fp_arc
		(start ${x_mir(-7.026247)} 10.59666)
		(mid ${x_mir(-8.373285)} 10.038698)
		(end ${x_mir(-8.931247)} 8.69166)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "c3c6e0ab-dfcc-49e9-9717-851924f5f5a1")
		)
		(fp_arc
		(start ${x_mir(6.943753)} -10.35834)
		(mid ${x_mir(8.290791)} -9.800378)
		(end ${x_mir(8.848753)} -8.45334)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "5163eae4-a1b8-4a46-97b9-9caebdd72a9d")
		)
		(fp_arc
		(start ${x_mir(8.848753)} 8.69166)
		(mid ${x_mir(8.290791)} 10.038698)
		(end ${x_mir(6.943753)} 10.59666)
		(stroke (width 0.0254) (type solid))
		(layer "User.1")
		(uuid "127aede8-0ef8-4cdf-84d2-857fa1ecba90")
		)
		(fp_circle
		(center ${x_mir(-8.931247)} -7.43734)
		(end ${x_mir(-8.931247)} -7.56434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "165e2a80-cabd-4285-88f2-3b266deb3475")
		)
		(fp_circle
		(center ${x_mir(-8.931247)} -4.89734)
		(end ${x_mir(-8.931247)} -5.02434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "d117a955-6445-449e-9bf8-c1b692713c7e")
		)
		(fp_circle
		(center ${x_mir(-8.931247)} -2.35734)
		(end ${x_mir(-8.931247)} -2.48434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "a0b568f4-02c7-4b27-8c74-c7adcb667d32")
		)
		(fp_circle
		(center ${x_mir(-8.931247)} 0.18266)
		(end ${x_mir(-8.931247)} 0.05566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "d399d909-a179-4266-82df-d99aab9572ed")
		)
		(fp_circle
		(center ${x_mir(-8.931247)} 2.72266)
		(end ${x_mir(-8.931247)} 2.59566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "a4f5c695-7164-4a20-a4ff-233bd2519be4")
		)
		(fp_circle
		(center ${x_mir(-8.931247)} 5.26266)
		(end ${x_mir(-8.931247)} 5.13566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "f52390ae-1773-4fe5-b576-fd0fa1fcb2f6")
		)
		(fp_circle
		(center ${x_mir(-8.931247)} 7.80266)
		(end ${x_mir(-8.931247)} 7.67566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "46a60715-d2fa-47f3-b978-281e6e77fcf9")
		)
		(fp_circle
		(center ${x_mir(-7.661247)} -7.43734)
		(end ${x_mir(-7.661247)} -7.56434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "9d1d3e0a-41fa-44b7-b0e2-13fc93dd453d")
		)
		(fp_circle
		(center ${x_mir(-7.661247)} -4.89734)
		(end ${x_mir(-7.661247)} -5.02434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "73cfe909-415c-468f-94e4-8a6484ac7126")
		)
		(fp_circle
		(center ${x_mir(-7.661247)} -2.35734)
		(end ${x_mir(-7.661247)} -2.48434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "b2273710-98dd-4c43-ad18-8b9c49bc91f0")
		)
		(fp_circle
		(center ${x_mir(-7.661247)} 0.18266)
		(end ${x_mir(-7.661247)} 0.05566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "df765f92-179a-4454-8b0f-10eed8a6351d")
		)
		(fp_circle
		(center ${x_mir(-7.661247)} 2.72266)
		(end ${x_mir(-7.661247)} 2.59566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "b9930479-a6a1-4d38-ba6c-bc4691c1c22c")
		)
		(fp_circle
		(center ${x_mir(-7.661247)} 5.26266)
		(end ${x_mir(-7.661247)} 5.13566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "f65ff26f-0529-47b4-8d2b-14c3c309ef66")
		)
		(fp_circle
		(center ${x_mir(-7.661247)} 7.80266)
		(end ${x_mir(-7.661247)} 7.67566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "e9bf0a0f-fcd4-45e0-948e-b1e4145306bb")
		)
		(fp_circle
		(center ${x_mir(7.578753)} -7.43734)
		(end ${x_mir(7.578753)} -7.56434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "e4e2f88d-3229-4b49-998b-4337e63ea818")
		)
		(fp_circle
		(center ${x_mir(7.578753)} -4.89734)
		(end ${x_mir(7.578753)} -5.02434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "580b24e1-924a-4e04-9e62-56f6157fcae8")
		)
		(fp_circle
		(center ${x_mir(7.578753)} -2.35734)
		(end ${x_mir(7.578753)} -2.48434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "8c746229-c82d-41ff-95d7-77c13a49e6df")
		)
		(fp_circle
		(center ${x_mir(7.578753)} 0.18266)
		(end ${x_mir(7.578753)} 0.05566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "f3c11123-ddf7-486f-a1c7-e88918c78ff3")
		)
		(fp_circle
		(center ${x_mir(7.578753)} 2.72266)
		(end ${x_mir(7.578753)} 2.59566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "75774822-315b-4dd0-95d0-6d5023dc7383")
		)
		(fp_circle
		(center ${x_mir(7.578753)} 5.26266)
		(end ${x_mir(7.578753)} 5.13566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "cdffd537-860a-4d4d-b3e3-7a38e68ce4a9")
		)
		(fp_circle
		(center ${x_mir(7.578753)} 7.80266)
		(end ${x_mir(7.578753)} 7.67566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "9217fc5a-5cfe-4a7a-9eae-6bff85b7c257")
		)
		(fp_circle
		(center ${x_mir(8.848753)} -7.43734)
		(end ${x_mir(8.848753)} -7.56434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "8418a576-ab8e-4a03-9836-332b588a0432")
		)
		(fp_circle
		(center ${x_mir(8.848753)} -4.89734)
		(end ${x_mir(8.848753)} -5.02434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "db5dcd2c-5109-4b73-a0ab-9f79394ddaf5")
		)
		(fp_circle
		(center ${x_mir(8.848753)} -2.35734)
		(end ${x_mir(8.848753)} -2.48434)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "32c7c931-9f3d-4f7c-96cf-629767ee9b8e")
		)
		(fp_circle
		(center ${x_mir(8.848753)} 0.18266)
		(end ${x_mir(8.848753)} 0.05566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "eb989bd1-3b6a-4e6a-8950-9f94d8405999")
		)
		(fp_circle
		(center ${x_mir(8.848753)} 2.72266)
		(end ${x_mir(8.848753)} 2.59566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "b723575b-3f85-4856-8649-5cbee57fa134")
		)
		(fp_circle
		(center ${x_mir(8.848753)} 5.26266)
		(end ${x_mir(8.848753)} 5.13566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "e670700c-eb2c-4239-9d28-27e35e1f2ef0")
		)
		(fp_circle
		(center ${x_mir(8.848753)} 7.80266)
		(end ${x_mir(8.848753)} 7.67566)
		(stroke (width 0.0254) (type default))
		(fill no)
		(layer "User.1")
		(uuid "c4d7f5e6-ccd5-4b6b-b763-119122381ff5")
		)
		(pad "1" smd roundrect
		(at ${x_mir(-8.296247)} -7.43734 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "a805de25-8885-4173-b902-c53aee428fd1")
		${p.D0.str}
		)
		(pad "2" smd roundrect
		(at ${x_mir(-8.296247)} -4.89734 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "27037707-710e-41c5-bb95-89006c6921b6")
		${p.D1.str}
		)
		(pad "3" smd roundrect
		(at ${x_mir(-8.296247)} -2.35734 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "116fb18b-eaa0-4e97-a92e-1b36fcb30408")
		${p.D2.str}
		)
		(pad "4" smd roundrect
		(at ${x_mir(-8.296247)} 0.18266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "18d161cf-ad8d-4667-bd02-2e0486781667")
		${p.D3.str}
		)
		(pad "5" smd roundrect
		(at ${x_mir(-8.296247)} 2.72266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "83ac3ffc-4850-4c5b-8931-fda5a55290ac")
		${p.D4.str}
		)
		(pad "6" smd roundrect
		(at ${x_mir(-8.296247)} 5.26266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "5db82474-5232-45b2-9870-5d0745752ef9")
		${p.D5.str}
		)
		(pad "7" smd roundrect
		(at ${x_mir(-8.296247)} 7.80266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "6644654f-9c2b-4f28-9656-158dea713c54")
		${p.D6.str}
		)
		(pad "8" smd roundrect
		(at ${x_mir(8.213753)} 7.80266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "48f3d9b3-efe6-4c30-a347-9c061f0117ab")
		${p.D7.str}
		)
		(pad "9" smd roundrect
		(at ${x_mir(8.213753)} 5.26266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "847fe324-82fe-4627-8fba-fe9bf7097b97")
		${p.D8.str}
		)
		(pad "10" smd roundrect
		(at ${x_mir(8.213753)} 2.72266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "58491263-c4c1-4ddf-b048-27c2b5eef8bf")
		${p.D9.str}
		)
		(pad "11" smd roundrect
		(at ${x_mir(8.213753)} 0.18266 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "45618c76-1f8e-4b53-8252-9f33b16597b4")
		${p.D10.str}
		)
		(pad "12" smd roundrect
		(at ${x_mir(8.213753)} -2.35734 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "f9ca63f5-7a67-42a2-b14f-ba1f88942108")
		${p.VCC3.str}
		)
		(pad "13" smd roundrect
		(at ${x_mir(8.213753)} -4.89734 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "657d976d-c74a-4ace-89f6-b71e596b8fea")
		${p.GND.str}
		)
		(pad "14" smd roundrect
		(at ${x_mir(8.213753)} -7.43734 ${pad1_14_angle})
		(size 2.032 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(thermal_bridge_angle 45)
		(uuid "700cab25-84f5-4e86-96ce-da629e69be5f")
		${p.VCC5.str}
		)
		(pad "15" smd roundrect
		(at ${x_mir(-8.696247)} -6.16734 ${pad15_20_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_right bottom_right' : 'top_left bottom_left'})
		(thermal_bridge_angle 45)
		(uuid "c844d5c2-6b37-4c61-b1e5-d6dd01f80b8d")
		${p.D11.str}
		)
		(pad "16" smd roundrect
		(at ${x_mir(-8.696247)} -3.62734 ${pad15_20_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_right bottom_right' : 'top_left bottom_left'})
		(thermal_bridge_angle 45)
		(uuid "6b0e65c2-3d4e-49db-aa28-c61cc6f52153")
		${p.D12.str}
		)
		(pad "17" smd roundrect
		(at ${x_mir(-8.696247)} -1.08734 ${pad15_20_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_right bottom_right' : 'top_left bottom_left'})
		(thermal_bridge_angle 45)
		(uuid "c3953b8d-65ef-4b58-b615-a1106a368e0a")
		${p.D13.str}
		)
		(pad "18" smd roundrect
		(at ${x_mir(-8.696247)} 1.45266 ${pad15_20_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_right bottom_right' : 'top_left bottom_left'})
		(thermal_bridge_angle 45)
		(uuid "30eae5a6-a26f-4479-9297-6b9c23e2dd93")
		${p.D14.str}
		)
		(pad "19" smd roundrect
		(at ${x_mir(-8.696247)} 3.99266 ${pad15_20_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_right bottom_right' : 'top_left bottom_left'})
		(thermal_bridge_angle 45)
		(uuid "0e685bfd-050f-4146-b871-8f30d26912b6")
		${p.D15.str}
		)
		(pad "20" smd roundrect
		(at ${x_mir(-8.696247)} 6.53266 ${pad15_20_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_right bottom_right' : 'top_left bottom_left'})
		(thermal_bridge_angle 45)
		(uuid "195dbc79-434b-45a2-89bc-4dcba16a86f0")
		${p.D16.str}
		)
		(pad "21" smd roundrect
		(at ${x_mir(8.613753)} 6.53266 ${pad21_23_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_left bottom_left' : 'top_right bottom_right'})
		(thermal_bridge_angle 45)
		(uuid "349057a6-b424-4b19-80fa-f3fb551137d0")
		${p.D17.str}
		)
		(pad "22" smd roundrect
		(at ${x_mir(8.613753)} 3.99266 ${pad21_23_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_left bottom_left' : 'top_right bottom_right'})
		(thermal_bridge_angle 45)
		(uuid "7f6bb971-ec05-49d3-a101-b9f88292703c")
		${p.D18.str}
		)
		(pad "23" smd roundrect
		(at ${x_mir(8.613753)} 1.45266 ${pad21_23_angle})
		(size 1.232 0.95)
		(layers "${p.side}.Cu" "${p.side}.Mask" "${p.side}.Paste")
		(roundrect_rratio 0.1)
		(chamfer_ratio 0.35)
		(chamfer ${p.mirror ? 'top_left bottom_left' : 'top_right bottom_right'})
		(thermal_bridge_angle 45)
		(uuid "3e3bf80c-d998-4723-b2bc-275edde2e41c")
		${p.D19.str}
		)
		(pad "24" thru_hole circle
		(at ${x_mir(-1.27)} -8.397093 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "7e1c7fac-612b-4b03-bad1-55491729b61f")
		${p.DIO.str}
		)
		(pad "25" thru_hole circle
		(at ${x_mir(1.27)} -8.397093 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "8aaa3e45-30ec-4a7a-9031-21f5e8a82dc5")
		${p.CLK.str}
		)
		(pad "26" thru_hole circle
		(at ${x_mir(-1.27)} -5.857093 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "d19d60f8-401e-41e9-bee1-6c7bf7cfb88d")
		${p.RST.str}
		)
		(pad "27" thru_hole circle
		(at ${x_mir(1.27)} -5.857093 90)
		(size 1.397 1.397)
		(drill 1.016)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "b4ce627f-564e-4647-b8b7-d3648ea85170")
		${p.GND.str}
		)
		(pad "28" thru_hole circle
		(at ${x_mir(-1.009)} 6.2318 270)
		(size 1.397 1.397)
		(drill 1.016)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "cddb9a7a-1298-4431-9189-d315105c59d7")
		${p.BATp.str}
		)
		(pad "29" thru_hole circle
		(at ${x_mir(0.896)} 6.2318 270)
		(size 1.397 1.397)
		(drill 1.016)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "8451f583-d70b-4c65-aef3-19191fc72287")
		${p.BATn.str}
		)
		(embedded_fonts no)
		)
		`
	}
}
