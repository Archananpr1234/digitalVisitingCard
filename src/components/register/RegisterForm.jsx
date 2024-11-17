import React, { useState } from "react";
import "./RegisterForm.css";
import { ImCross } from "react-icons/im";

const RegisterForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState({});

    const closeModel = () => {
        props.closeModel(false);
    };

    const handlePhoneNumber = (e) => {
        let value = e.target.value;
        if (!isNaN(value) && value.length <= 15) {
            setPhoneNumber(value);
        }
    };

    const handleCountryChange = (e) => {
        const selectedOption = e.target.value;
        const codeMatch = selectedOption.match(/\(\+[\d-]+\)/); // Extracts the country code
        setCountry(selectedOption);
        setCountryCode(codeMatch ? codeMatch[0] : '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let error1 = {};

        if (!companyName) error1.companyName = 'Company Name is required';
        if (!country) error1.country = 'Country is required';
        if (!phoneNumber) error1.phoneNumber = 'Mobile Number is required';
        if (!email) error1.email = 'Email is required';
        if (!password) error1.password = 'Password is required';

        setError(error1);

        if (Object.keys(error1).length === 0) {
            console.log('Form Submitted Successfully');
            console.log({
                companyName,
                country,
                phoneNumber: `${countryCode} ${phoneNumber}`,
                email,
                password,
            });
        }
    };

    const openLogin = () => {
        setCompanyName('');
        setCountry('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
        props.checkIsLogin(true);
    }

    return (
        <div className="model-container">
            <div className="model-content">
                <div className="model-header">
                    <p className="model-header-paragraph">Digital Visiting Card</p>
                    <span onClick={() => closeModel()}><ImCross /></span>
                </div>
                <p>{props?.heading}</p>
                <hr className="login-underline" />

                <form className="model-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <span className="text-red-600">{error?.companyName}</span>
                    <select value={country} onChange={handleCountryChange}>
                        <option value="">Select Country Code</option>
                        <option value="AFGHANISTAN (+93)">AFGHANISTAN (+93)</option>
                        <option value="ALBANIA (+355)">ALBANIA (+355)</option>
                        <option value="ALGERIA (+213)">ALGERIA (+213)</option>
                        <option value="ANDORRA (+376)">ANDORRA (+376)</option>
                        <option value="ANGOLA (+244)">ANGOLA (+244)</option>
                        <option value="ANTIGUA AND BARBUDA (+1-268)">ANTIGUA AND BARBUDA (+1-268)</option>
                        <option value="ARGENTINA (+54)">ARGENTINA (+54)</option>
                        <option value="ARMENIA (+374)">ARMENIA (+374)</option>
                        <option value="AUSTRALIA (+61)">AUSTRALIA (+61)</option>
                        <option value="AUSTRIA (+43)">AUSTRIA (+43)</option>
                        <option value="AZERBAIJAN (+994)">AZERBAIJAN (+994)</option>
                        <option value="BAHAMAS (+1-242)">BAHAMAS (+1-242)</option>
                        <option value="BAHRAIN (+973)">BAHRAIN (+973)</option>
                        <option value="BANGLADESH (+880)">BANGLADESH (+880)</option>
                        <option value="BARBADOS (+1-246)">BARBADOS (+1-246)</option>
                        <option value="BELARUS (+375)">BELARUS (+375)</option>
                        <option value="BELGIUM (+32)">BELGIUM (+32)</option>
                        <option value="BELIZE (+501)">BELIZE (+501)</option>
                        <option value="BENIN (+229)">BENIN (+229)</option>
                        <option value="BHUTAN (+975)">BHUTAN (+975)</option>
                        <option value="BOLIVIA (+591)">BOLIVIA (+591)</option>
                        <option value="BOSNIA AND HERZEGOVINA (+387)">BOSNIA AND HERZEGOVINA (+387)</option>
                        <option value="BOTSWANA (+267)">BOTSWANA (+267)</option>
                        <option value="BRAZIL (+55)">BRAZIL (+55)</option>
                        <option value="BRUNEI (+673)">BRUNEI (+673)</option>
                        <option value="BULGARIA (+359)">BULGARIA (+359)</option>
                        <option value="BURKINA FASO (+226)">BURKINA FASO (+226)</option>
                        <option value="BURUNDI (+257)">BURUNDI (+257)</option>
                        <option value="CAMBODIA (+855)">CAMBODIA (+855)</option>
                        <option value="CAMEROON (+237)">CAMEROON (+237)</option>
                        <option value="CANADA (+1)">CANADA (+1)</option>
                        <option value="CAPE VERDE (+238)">CAPE VERDE (+238)</option>
                        <option value="CENTRAL AFRICAN REPUBLIC (+236)">CENTRAL AFRICAN REPUBLIC (+236)</option>
                        <option value="CHAD (+235)">CHAD (+235)</option>
                        <option value="CHILE (+56)">CHILE (+56)</option>
                        <option value="CHINA (+86)">CHINA (+86)</option>
                        <option value="COLOMBIA (+57)">COLOMBIA (+57)</option>
                        <option value="COMOROS (+269)">COMOROS (+269)</option>
                        <option value="CONGO (+242)">CONGO (+242)</option>
                        <option value="COSTA RICA (+506)">COSTA RICA (+506)</option>
                        <option value="CROATIA (+385)">CROATIA (+385)</option>
                        <option value="CUBA (+53)">CUBA (+53)</option>
                        <option value="CYPRUS (+357)">CYPRUS (+357)</option>
                        <option value="CZECH REPUBLIC (+420)">CZECH REPUBLIC (+420)</option>
                        <option value="DENMARK (+45)">DENMARK (+45)</option>
                        <option value="DJIBOUTI (+253)">DJIBOUTI (+253)</option>
                        <option value="DOMINICA (+1-767)">DOMINICA (+1-767)</option>
                        <option value="DOMINICAN REPUBLIC (+1-809)">DOMINICAN REPUBLIC (+1-809)</option>
                        <option value="ECUADOR (+593)">ECUADOR (+593)</option>
                        <option value="EGYPT (+20)">EGYPT (+20)</option>
                        <option value="EL SALVADOR (+503)">EL SALVADOR (+503)</option>
                        <option value="EQUATORIAL GUINEA (+240)">EQUATORIAL GUINEA (+240)</option>
                        <option value="ERITREA (+291)">ERITREA (+291)</option>
                        <option value="ESTONIA (+372)">ESTONIA (+372)</option>
                        <option value="ESWATINI (+268)">ESWATINI (+268)</option>
                        <option value="ETHIOPIA (+251)">ETHIOPIA (+251)</option>
                        <option value="FIJI (+679)">FIJI (+679)</option>
                        <option value="FINLAND (+358)">FINLAND (+358)</option>
                        <option value="FRANCE (+33)">FRANCE (+33)</option>
                        <option value="GABON (+241)">GABON (+241)</option>
                        <option value="GAMBIA (+220)">GAMBIA (+220)</option>
                        <option value="GEORGIA (+995)">GEORGIA (+995)</option>
                        <option value="GERMANY (+49)">GERMANY (+49)</option>
                        <option value="GHANA (+233)">GHANA (+233)</option>
                        <option value="GREECE (+30)">GREECE (+30)</option>
                        <option value="GRENADA (+1-473)">GRENADA (+1-473)</option>
                        <option value="GUATEMALA (+502)">GUATEMALA (+502)</option>
                        <option value="GUINEA (+224)">GUINEA (+224)</option>
                        <option value="GUYANA (+592)">GUYANA (+592)</option>
                        <option value="HAITI (+509)">HAITI (+509)</option>
                        <option value="HONDURAS (+504)">HONDURAS (+504)</option>
                        <option value="HUNGARY (+36)">HUNGARY (+36)</option>
                        <option value="ICELAND (+354)">ICELAND (+354)</option>
                        <option value="INDIA (+91)">INDIA (+91)</option>
                        <option value="INDONESIA (+62)">INDONESIA (+62)</option>
                        <option value="IRAN (+98)">IRAN (+98)</option>
                        <option value="IRAQ (+964)">IRAQ (+964)</option>
                        <option value="IRELAND (+353)">IRELAND (+353)</option>
                        <option value="ISRAEL (+972)">ISRAEL (+972)</option>
                        <option value="ITALY (+39)">ITALY (+39)</option>
                        <option value="JAMAICA (+1-876)">JAMAICA (+1-876)</option>
                        <option value="JAPAN (+81)">JAPAN (+81)</option>
                        <option value="JORDAN (+962)">JORDAN (+962)</option>
                        <option value="KAZAKHSTAN (+7)">KAZAKHSTAN (+7)</option>
                        <option value="KENYA (+254)">KENYA (+254)</option>
                        <option value="KIRIBATI (+686)">KIRIBATI (+686)</option>
                        <option value="KOSOVO (+383)">KOSOVO (+383)</option>
                        <option value="KUWAIT (+965)">KUWAIT (+965)</option>
                        <option value="KYRGYZSTAN (+996)">KYRGYZSTAN (+996)</option>
                        <option value="LAOS (+856)">LAOS (+856)</option>
                        <option value="LATVIA (+371)">LATVIA (+371)</option>
                        <option value="LEBANON (+961)">LEBANON (+961)</option>
                        <option value="LESOTHO (+266)">LESOTHO (+266)</option>
                        <option value="LIBERIA (+231)">LIBERIA (+231)</option>
                        <option value="LIBYA (+218)">LIBYA (+218)</option>
                        <option value="LIECHTENSTEIN (+423)">LIECHTENSTEIN (+423)</option>
                        <option value="LITHUANIA (+370)">LITHUANIA (+370)</option>
                        <option value="LUXEMBOURG (+352)">LUXEMBOURG (+352)</option>
                        <option value="MADAGASCAR (+261)">MADAGASCAR (+261)</option>
                        <option value="MALAWI (+265)">MALAWI (+265)</option>
                        <option value="MALAYSIA (+60)">MALAYSIA (+60)</option>
                        <option value="MALDIVES (+960)">MALDIVES (+960)</option>
                        <option value="MALI (+223)">MALI (+223)</option>
                        <option value="MALTA (+356)">MALTA (+356)</option>
                        <option value="MARSHALL ISLANDS (+692)">MARSHALL ISLANDS (+692)</option>
                        <option value="MAURITANIA (+222)">MAURITANIA (+222)</option>
                        <option value="MAURITIUS (+230)">MAURITIUS (+230)</option>
                        <option value="MEXICO (+52)">MEXICO (+52)</option>
                        <option value="MICRONESIA (+691)">MICRONESIA (+691)</option>
                        <option value="MOLDOVA (+373)">MOLDOVA (+373)</option>
                        <option value="MONACO (+377)">MONACO (+377)</option>
                        <option value="MONGOLIA (+976)">MONGOLIA (+976)</option>
                        <option value="MONTENEGRO (+382)">MONTENEGRO (+382)</option>
                        <option value="MOROCCO (+212)">MOROCCO (+212)</option>
                        <option value="MOZAMBIQUE (+258)">MOZAMBIQUE (+258)</option>
                        <option value="MYANMAR (+95)">MYANMAR (+95)</option>
                        <option value="NAMIBIA (+264)">NAMIBIA (+264)</option>
                        <option value="NAURU (+674)">NAURU (+674)</option>
                        <option value="NEPAL (+977)">NEPAL (+977)</option>
                        <option value="NETHERLANDS (+31)">NETHERLANDS (+31)</option>
                        <option value="NEW ZEALAND (+64)">NEW ZEALAND (+64)</option>
                        <option value="NICARAGUA (+505)">NICARAGUA (+505)</option>
                        <option value="NIGER (+227)">NIGER (+227)</option>
                        <option value="NIGERIA (+234)">NIGERIA (+234)</option>
                        <option value="NORTH KOREA (+850)">NORTH KOREA (+850)</option>
                        <option value="NORTH MACEDONIA (+389)">NORTH MACEDONIA (+389)</option>
                        <option value="NORWAY (+47)">NORWAY (+47)</option>
                        <option value="OMAN (+968)">OMAN (+968)</option>
                        <option value="PAKISTAN (+92)">PAKISTAN (+92)</option>
                        <option value="PALAU (+680)">PALAU (+680)</option>
                        <option value="PALESTINE (+970)">PALESTINE (+970)</option>
                        <option value="PANAMA (+507)">PANAMA (+507)</option>
                        <option value="PAPUA NEW GUINEA (+675)">PAPUA NEW GUINEA (+675)</option>
                        <option value="PARAGUAY (+595)">PARAGUAY (+595)</option>
                        <option value="PERU (+51)">PERU (+51)</option>
                        <option value="PHILIPPINES (+63)">PHILIPPINES (+63)</option>
                        <option value="POLAND (+48)">POLAND (+48)</option>
                        <option value="PORTUGAL (+351)">PORTUGAL (+351)</option>
                        <option value="QATAR (+974)">QATAR (+974)</option>
                        <option value="ROMANIA (+40)">ROMANIA (+40)</option>
                        <option value="RUSSIA (+7)">RUSSIA (+7)</option>
                        <option value="RWANDA (+250)">RWANDA (+250)</option>
                        <option value="SAUDI ARABIA (+966)">SAUDI ARABIA (+966)</option>
                        <option value="SENEGAL (+221)">SENEGAL (+221)</option>
                        <option value="SERBIA (+381)">SERBIA (+381)</option>
                        <option value="SEYCHELLES (+248)">SEYCHELLES (+248)</option>
                        <option value="SIERRA LEONE (+232)">SIERRA LEONE (+232)</option>
                        <option value="SINGAPORE (+65)">SINGAPORE (+65)</option>
                        <option value="SLOVAKIA (+421)">SLOVAKIA (+421)</option>
                        <option value="SLOVENIA (+386)">SLOVENIA (+386)</option>
                        <option value="SOMALIA (+252)">SOMALIA (+252)</option>
                        <option value="SOUTH AFRICA (+27)">SOUTH AFRICA (+27)</option>
                        <option value="SOUTH KOREA (+82)">SOUTH KOREA (+82)</option>
                        <option value="SOUTH SUDAN (+211)">SOUTH SUDAN (+211)</option>
                        <option value="SPAIN (+34)">SPAIN (+34)</option>
                        <option value="SRI LANKA (+94)">SRI LANKA (+94)</option>
                        <option value="SUDAN (+249)">SUDAN (+249)</option>
                        <option value="SURINAME (+597)">SURINAME (+597)</option>
                        <option value="SWEDEN (+46)">SWEDEN (+46)</option>
                        <option value="SWITZERLAND (+41)">SWITZERLAND (+41)</option>
                        <option value="SYRIA (+963)">SYRIA (+963)</option>
                        <option value="TAIWAN (+886)">TAIWAN (+886)</option>
                        <option value="TAJIKISTAN (+992)">TAJIKISTAN (+992)</option>
                        <option value="TANZANIA (+255)">TANZANIA (+255)</option>
                        <option value="THAILAND (+66)">THAILAND (+66)</option>
                        <option value="TIMOR-LESTE (+670)">TIMOR-LESTE (+670)</option>
                        <option value="TOGO (+228)">TOGO (+228)</option>
                        <option value="TONGA (+676)">TONGA (+676)</option>
                        <option value="TRINIDAD AND TOBAGO (+1-868)">TRINIDAD AND TOBAGO (+1-868)</option>
                        <option value="TUNISIA (+216)">TUNISIA (+216)</option>
                        <option value="TURKEY (+90)">TURKEY (+90)</option>
                        <option value="TURKMENISTAN (+993)">TURKMENISTAN (+993)</option>
                        <option value="TUVALU (+688)">TUVALU (+688)</option>
                        <option value="UGANDA (+256)">UGANDA (+256)</option>
                        <option value="UKRAINE (+380)">UKRAINE (+380)</option>
                        <option value="UNITED ARAB EMIRATES (+971)">UNITED ARAB EMIRATES (+971)</option>
                        <option value="UNITED KINGDOM (+44)">UNITED KINGDOM (+44)</option>
                        <option value="UNITED STATES (+1)">UNITED STATES (+1)</option>
                        <option value="URUGUAY (+598)">URUGUAY (+598)</option>
                        <option value="UZBEKISTAN (+998)">UZBEKISTAN (+998)</option>
                        <option value="VANUATU (+678)">VANUATU (+678)</option>
                        <option value="VATICAN CITY (+379)">VATICAN CITY (+379)</option>
                        <option value="VENEZUELA (+58)">VENEZUELA (+58)</option>
                        <option value="VIETNAM (+84)">VIETNAM (+84)</option>
                        <option value="YEMEN (+967)">YEMEN (+967)</option>
                        <option value="ZAMBIA (+260)">ZAMBIA (+260)</option>
                        <option value="ZIMBABWE (+263)">ZIMBABWE (+263)</option>
                    </select>

                    <span className="text-red-600">{error?.country}</span>

                    <div className="phone-number-input">
                       {countryCode && <div className="country-code">{countryCode.replace(/[()]/g, "")}</div>}
                        <input
                            type="text"
                            className="phone-input"
                            placeholder="Mobile Number"
                            value={phoneNumber}
                            onChange={handlePhoneNumber}
                        />
                    </div>

                    <span className="text-red-600">{error?.phoneNumber}</span>

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="text-red-600">{error?.email}</span>

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="text-red-600">{error?.password}</span>

                    <button className="login-btn" type="submit">Register</button>
                </form>

                <div className="model-bottom">
                    <span>Already have an account? </span>
                    <button onClick={() => openLogin()} >Login Here</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
