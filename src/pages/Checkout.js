import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../components/checkout/Checkout.module.css";
import UseInput from "../hooks/use-input";
import { useGlobalContext } from "../context";
import Billing from "../components/billing/Billing";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart} = useGlobalContext();
  const [showCashSection, setShowCashSection] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [payment, setPayment] = useState({
    paymentMethod: { value: "e-money", error: false },
    emoneyNumber: { value: "", error: false },
    emoneyPin: { value: "", error: false },
  });
  const chipping = 50;
 

  const handleChange = (e) => {
    if (payment.paymentMethod.value === "e-money") {
      setPayment({
        ...payment,
        paymentMethod: { value: "cash on delevry", error: false },
      });
      setShowCashSection(true)
    }
    if (payment.paymentMethod.value === "cash on delevry") {
      setPayment({
        ...payment,
        paymentMethod: { value: "e-money", error: false },
      });
      setShowCashSection(false)
    }
  };
let enteredEmailCheck;
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeValueHandler: changeNameHandler,
    blurInputHandler: blurNameInputHandler,
    reset: nameInputReset,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeValueHandler: changeEmailHandler,
    blurInputHandler: blurEmailInputHandler,
    reset: emailInputReset,
  } = UseInput((value) => value.trim() !== "" && !enteredEmailCheck );
  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    changeValueHandler: changePhoneHandler,
    blurInputHandler: blurPhoneInputHandler,
    reset: phoneInputReset,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    changeValueHandler: changeAddressHandler,
    blurInputHandler: blurAddressInputHandler,
    reset: addressInputReset,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredZip,
    isValid: zipIsValid,
    hasError: zipHasError,
    changeValueHandler: changeZipHandler,
    blurInputHandler: blurZipInputHandler,
    reset: zipInputReset,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    changeValueHandler: changeCityHandler,
    blurInputHandler: blurCityInputHandler,
    reset: cityInputReset,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredCountry,
    isValid: countryIsValid,
    hasError: countryHasError,
    changeValueHandler: changeCountryHandler,
    blurInputHandler: blurCountryInputHandler,
    reset: countryInputReset,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredMoneyNumber,
    isValid: moneyNumberIsValid,
    hasError: moneyNumberHasError,
    changeValueHandler: changeMoneyNumberHandler,
    blurInputHandler: blurMoneyNumberInputHandler,
    reset: moneyNumberInputReset,
  } = UseInput((value) => value.trim() !== "");
  const {
    value: enteredMoneyPin,
    isValid: moneyPinIsValid,
    hasError: moneyPinHasError,
    changeValueHandler: changeMoneyPinHandler,
    blurInputHandler: blurMoneyPinInputHandler,
    reset: moneyPinInputReset,
  } = UseInput((value) => value.trim() !== "");

  let formIsValid = false;
  if(enteredEmail ===''){
    enteredEmailCheck = true;
    
  }
  else{
    enteredEmailCheck = /\S+@\S+\.\S+/.test(enteredEmail);
  }
 
  if (
    nameIsValid &&
    emailIsValid &&
    enteredEmailCheck &&
    phoneIsValid &&
    addressIsValid &&
    zipIsValid &&
    cityIsValid &&
    countryIsValid &&
    (showCashSection || moneyNumberIsValid) &&
    (showCashSection || moneyPinIsValid)
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameHasError || emailHasError || phoneHasError || addressHasError || zipHasError || cityHasError || countryHasError || (!showCashSection && moneyNumberHasError) || (!showCashSection && moneyPinHasError)) {
      return;
    }
    formIsValid = true;
    setShowBilling(true);
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Optional if you want to skip the scrolling animation
      });

    nameInputReset();
    emailInputReset();
    phoneInputReset();
    addressInputReset();
    zipInputReset();
    cityInputReset();
    countryInputReset();
    moneyNumberInputReset();
    moneyPinInputReset();
  };
  const hasError1 = nameHasError ? "formElement error" : "formElement";
  const hasError2 = emailHasError || !enteredEmailCheck ? "formElement error" : "formElement";
  const hasError3 = phoneHasError ? "formElement error" : "formElement";
  const hasError4 = addressHasError ? "formElement error" : "formElement";
  const hasError5 = zipHasError ? "formElement error" : "formElement";
  const hasError6 = cityHasError ? "formElement error" : "formElement";
  const hasError7 = countryHasError ? "formElement error" : "formElement";
  const hasError8 = moneyNumberHasError ? "formElement error" : "formElement";
  const hasError9 = moneyPinHasError ? "formElement error" : "formElement";
  return (
    <div className={classes.checkout}>
      {showBilling && <Billing chipping={chipping} />}
      <div className={classes.checkoutHeader}></div>
      <div className={`${classes.returnPage} ${"container"}`}>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
      <div className={`${classes.checkoutContainer} ${"container"}`}>
        <form className={classes.checkoutForm}>
          <h3>chechout</h3>
          <p className="subTitle">belling details</p>
          <div className={classes.billing}>
            <div className={hasError1}>
              <label htmlFor="name">name</label>
              {nameHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="name"
                name="name"
                value={enteredName}
                onChange={changeNameHandler}
                onBlur={blurNameInputHandler}
                placeholder="Alexei Ward"
              />
            </div>
            <div className={hasError2}>
              <label htmlFor="email">email</label>
              {emailHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              {(!enteredEmailCheck) &&(
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  wrong format!
                </p>
              )}
              <input
                type="text"
                id="email"
                name="email"
                value={enteredEmail}
                onChange={changeEmailHandler}
                onBlur={blurEmailInputHandler}
                placeholder="alexei@mail.com"
              />
            </div>
            <div className={hasError3}>
              <label htmlFor="phone">phone</label>
              {phoneHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="phone"
                name="phone"
                value={enteredPhone}
                onChange={changePhoneHandler}
                onBlur={blurPhoneInputHandler}
                placeholder="+1 202-555-0136"
              />
            </div>
          </div>
          <p className="subTitle">shipping info</p>
          <div className={classes.shipping}>
            <div className={hasError4}>
              <label htmlFor="address">address</label>
              {addressHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="address"
                name="address"
                value={enteredAddress}
                onChange={changeAddressHandler}
                onBlur={blurAddressInputHandler}
                placeholder="1137 Williams Avenue"
              />
            </div>
            <div className={hasError5}>
              <label htmlFor="zip">zip</label>
              {zipHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="zip"
                name="zip"
                value={enteredZip}
                onChange={changeZipHandler}
                onBlur={blurZipInputHandler}
                placeholder="10001"
              />
            </div>
            <div className={hasError6}>
              <label htmlFor="city">city</label>
              {cityHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="city"
                name="city"
                value={enteredCity}
                onChange={changeCityHandler}
                onBlur={blurCityInputHandler}
                placeholder="New York"
              />
            </div>
            <div className={hasError7}>
              <label htmlFor="country">country</label>
              {countryHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="country"
                name="country"
                value={enteredCountry}
                onChange={changeCountryHandler}
                onBlur={blurCountryInputHandler}
                placeholder="United States"
              />
            </div>
          </div>
          <p className="subTitle">payment detail </p>
          <div className={classes.payment}>
            <div className="formElement">
              <label>payment method</label>
            </div>

            <div className="radioContainer">
              <input
                type="radio"
                name="money"
                value="e-money"
                onChange={handleChange}
                checked={payment.paymentMethod.value === "e-money"}
              />
              <span className="checkmark"></span>
              <label>e-Money</label>
            </div>
            <div className="radioContainer">
              <input
                type="radio"
                name="money"
                value="cash on delevry"
                onChange={handleChange}
                checked={payment.paymentMethod.value === "cash on delevry"}
              />
              <span className="checkmark"></span>
              <label>Cash on Delevery</label>
            </div>
          {!showCashSection &&  <>
            <div className={hasError8}>
              <label htmlFor="moneyNumber">moneyNumber</label>
              {moneyNumberHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="moneyNumber"
                name="moneyNumber"
                value={enteredMoneyNumber}
                onChange={changeMoneyNumberHandler}
                onBlur={blurMoneyNumberInputHandler}
                placeholder="238521993"
              />
            </div>
            <div className={hasError9}>
              <label htmlFor="moneyPin">moneyPin</label>
              {moneyPinHasError && (
                <p className={`${classes.errorMessage} ${"errorMessage"}`}>
                  empty field!
                </p>
              )}
              <input
                type="text"
                id="moneyPin"
                name="moneyPin"
                value={enteredMoneyPin}
                onChange={changeMoneyPinHandler}
                onBlur={blurMoneyPinInputHandler}
                placeholder="6891"
              />
            </div>
            </>}
          </div>
        {showCashSection &&  <div className={classes.cashSection}>
            <div className={classes.cashSvgWrapper}>
              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                  fill="#D87D4A"
                />
              </svg>
            </div>
            <div className={classes.cashInfo}>
              <p className="overlay">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </div>}
        </form>
        <div className={classes.checkoutSummary}>
          <h6>summary</h6>
          <ul className={classes.propducts}>
            {cart.items.map((item) => (
              <li key={item.id}>
                <div className={classes.product}>
                  <div className={classes.imgWrapper}>
                    <img
                      src={`../.${item.categoryImage.desktop}`}
                      alt={item.name}
                    />
                  </div>
                  <div className={classes.info}>
                    <h5>{item.name.slice(0, 4)}</h5>
                    <h6>${item.price}</h6>
                  </div>
                </div>
                <div className={classes.quantity}>x{item.quantity}</div>
              </li>
            ))}
          </ul>
          <div className={classes.actions}>
            <div className={classes.total}>
              <p className="overlay">total</p>
              <h6>${cart.totalAmount}</h6>
            </div>
            <div className={classes.total}>
              <p className="overlay">chipping</p>
              <h6>$50</h6>
            </div>
            <div className={classes.total}>
              <p className="overlay">vat(included)</p>
              <h6>${(cart.totalAmount * 0.2).toFixed(2)}</h6>
            </div>
            <div className={classes.total}>
              <p className="overlay">grand total</p>
              <h6>${(cart.totalAmount + chipping).toFixed(2)}</h6>
            </div>
          </div>
          <button className= {formIsValid?"button1":"button1 disabled"}  disabled={!formIsValid} onClick={submitHandler}>
            continue & pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
