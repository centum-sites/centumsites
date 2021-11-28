import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import { Bar } from 'react-chartjs-2';
import currentUser from '../utils/currentUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import style from '../styles/Calculator.module.scss';
import axios from 'axios';
import { motion } from 'framer-motion';


class Calculator extends Component {

  state = {
    amount: 0,
    askingPrice: 0,
    downPay5: 0,
    downPay10: 0,
    downPay15: 0,
    downPay20: 0,
    chosenDownPay: '',
    principal5: 0,
    principal10: 0,
    principal15: 0,
    principal20: 0,
    chosenPrincipal: 0,
    insurance5: 0,
    insurance10: 0,
    insurance15: 0,
    insurance20: 0,
    monthlyPay5: 0,
    monthlyPay10: 0,
    monthlyPay15: 0,
    monthlyPay20: 0,
    periodicPay5: 0,
    periodicPay10: 0,
    periodicPay15: 0,
    periodicPay20: 0,
    years: '',
    rate: 0,
    effectiveRate: 0,
    frequency: 0,
    numberOfPayments: 0,
    showBodyCashNeeded: false,
    showBodyMonthlyExpenses: false,
    showBodyAmortization: false,
    houseType: false,
    totalCashNeeded: 0,
    titleInsurance: 0,
    condoFee: 0,
    condoFees: 0,
    propertyTax: 0,
    monthlyDebtPayments: 0,
    utilities: 21,
    propertyInsurance: 50,
    phone: 40,
    cable: 60,
    internet: 45,
    chosenPeriodicPay: 0,
    chosenDownPayExpense: 0,
    totalMonthlyPayments: 0,
    amortizationBalance: 0,
    amortizationTable: [],
    totalPaid: 0,
    showTable: false,
    loading: false,
    chartData: {
      labels: [],
      datasets: [
        {
          label: 'Balance:',
          backgroundColor: '#77bc15',
          borderColor: 'transparent',
          borderWidth: 1,
          hoverBackgroundColor: '#77bc15',
          data: []
        }
      ]
    }
  }

  getInitialState = () => {
    return ({ amount: "0.00" });
  }

  // Initial that Fires the Down Payment Calc

  onChangeAmount = (event, maskedvalue, floatvalue) => {
    this.setState({
      amount: maskedvalue
    });
  }

  handleInitialCalc = () => {
    this.downpaymentCalc(this.state.amount);
  }

  // Years, Rate and Frequency Handlers

  onChangeFrequency = (event) => {
    let stateCallbacks = () => {
      this.monthlyPay();
      this.periodicPayCalc();
    }

    this.setState({
      frequency: event.target.value
    }, () => stateCallbacks()
    );
  }

  onChangeYears = (event) => {
    let stateCallbacks = () => {
      this.monthlyPay();
      this.periodicPayCalc();
    }

    this.setState({
      years: event.target.value
    }, () => stateCallbacks()
    );
  }

  onChangeRate = (event) => {
    let stateCallbacks = () => {
      this.getEffectiveRate();
      this.monthlyPay();
      this.monthlyExpensesCalc()
      this.periodicPayCalc();
    }

    this.setState({
      rate: event.target.value
    }, () => stateCallbacks()
    );
  }

  getEffectiveRate = () => {
    let nominalRate = this.state.rate / 100;
    let effectiveRate = (Math.pow(Math.pow(1 + (nominalRate / 2), 2), (1 / 12)) - 1) * 12;
    this.setState({
      effectiveRate: effectiveRate
    }, () => this.monthlyPay());
  }

  // 1_Calculate Down Payment and Insurance Amounts

  downpaymentCalc = (newAmount) => {
    this.setState({
      downPay5: newAmount * 0.05,
      downPay10: newAmount * 0.1,
      downPay15: newAmount * 0.15,
      downPay20: newAmount * 0.2,
    }, () => this.insuranceCalc(this.state.amount)
    );
  }

  insuranceCalc = (newAmount) => {
    this.setState({
      insurance5: (newAmount - this.state.downPay5) * 0.04,
      insurance10: (newAmount - this.state.downPay10) * 0.031,
      insurance15: (newAmount - this.state.downPay15) * 0.028,
      insurance20: (newAmount - this.state.downPay20) * 0,
    }, () => this.principalCalc(this.state.amount)
    );
  }

  // 2_Calculate the Principal Amount for Each Down Payment  

  principalCalc = (newAmount) => {
    this.setState({
      principal5: (newAmount - this.state.downPay5) + this.state.insurance5,
      principal10: (newAmount - this.state.downPay10) + this.state.insurance10,
      principal15: (newAmount - this.state.downPay15) + this.state.insurance15,
      principal20: (newAmount - this.state.downPay20) + this.state.insurance20,
    }, () => this.monthlyPay()
    );
  }

  // 3_Calculate the Monthly Payment based on 12 months (a Year)

  monthlyPay = () => {
    let years = this.state.years;
    let principal5 = this.state.principal5;
    let principal10 = this.state.principal10;
    let principal15 = this.state.principal15;
    let principal20 = this.state.principal20;
    let numberOfPayments = years * 12;
    let effectiveRate = this.state.effectiveRate;

    this.setState({
      monthlyPay5: ((effectiveRate / 12) * principal5) / (1 - (Math.pow((1 + (effectiveRate / 12)), (-1 * numberOfPayments)))),
      monthlyPay10: ((effectiveRate / 12) * principal10) / (1 - (Math.pow((1 + (effectiveRate / 12)), (-1 * numberOfPayments)))),
      monthlyPay15: ((effectiveRate / 12) * principal15) / (1 - (Math.pow((1 + (effectiveRate / 12)), (-1 * numberOfPayments)))),
      monthlyPay20: ((effectiveRate / 12) * principal20) / (1 - (Math.pow((1 + (effectiveRate / 12)), (-1 * numberOfPayments)))),
    }, () => this.periodicPayCalc()
    );
  }

  // 4_Calculate the Periodic Payment Based on the Chosen Years and Frequency

  periodicPayCalc = () => {
    let frequency = this.state.frequency;
    let monthly5 = this.state.monthlyPay5;
    let monthly10 = this.state.monthlyPay10;
    let monthly15 = this.state.monthlyPay15;
    let monthly20 = this.state.monthlyPay20;

    let periodicPayment = () => {
      let stateCallbacks = () => {
        this.chosenPeriodicPayCalc();
      }

      if (frequency === 'monthly') {
        this.setState({
          periodicPay5: monthly5,
          periodicPay10: monthly10,
          periodicPay15: monthly15,
          periodicPay20: monthly20,
          numberOfPayments: 12,
        }, () => stateCallbacks())
      } else if (frequency === 'biweekly') {
        this.setState({
          periodicPay5: (monthly5 * 12) / 26,
          periodicPay10: (monthly10 * 12) / 26,
          periodicPay15: (monthly15 * 12) / 26,
          periodicPay20: (monthly20 * 12) / 26,
          numberOfPayments: (365 / 7) / 2
        }, () => stateCallbacks())
      } else if (frequency === 'weekly') {
        this.setState({
          periodicPay5: (monthly5 * 12) / 52,
          periodicPay10: (monthly10 * 12) / 52,
          periodicPay15: (monthly15 * 12) / 52,
          periodicPay20: (monthly20 * 12) / 52,
          numberOfPayments: (365 / 7)
        }, () => stateCallbacks())
      } else if (frequency === 'accbiweekly') {
        this.setState({
          periodicPay5: monthly5 / 2,
          periodicPay10: monthly10 / 2,
          periodicPay15: monthly15 / 2,
          periodicPay20: monthly20 / 2,
          numberOfPayments: (365 / 7) / 2
        }, () => stateCallbacks())
      } else if (frequency === 'accweekly') {
        this.setState({
          periodicPay5: monthly5 / 4,
          periodicPay10: monthly10 / 4,
          periodicPay15: monthly15 / 4,
          periodicPay20: monthly20 / 4,
          numberOfPayments: (365 / 7)
        }, () => stateCallbacks())
      }
    }
    periodicPayment();
  }

  // 5_Changing the Periodic Payment on Monthly Expenses Section based on the chosen Down Payment

  chosenPeriodicPayCalc = () => {
    let chosenDownPayExpense = this.state.chosenDownPayExpense;
    if (chosenDownPayExpense === 5) {
      this.setState({
        chosenPeriodicPay: this.state.periodicPay5,
        chosenPrincipal: this.state.principal5
      }, () => this.totalPaidCalc());
      return this.state.periodicPay5;
    } else if (chosenDownPayExpense === 10) {
      this.setState({
        chosenPeriodicPay: this.state.periodicPay10,
        chosenPrincipal: this.state.principal10
      }, () => this.totalPaidCalc());
      return this.state.periodicPay10;
    } else if (chosenDownPayExpense === 15) {
      this.setState({
        chosenPeriodicPay: this.state.periodicPay15,
        chosenPrincipal: this.state.principal15
      }, () => this.totalPaidCalc());
      return this.state.periodicPay15;
    } else if (chosenDownPayExpense === 20) {
      this.setState({
        chosenPeriodicPay: this.state.periodicPay20,
        chosenPrincipal: this.state.principal20
      }, () => this.totalPaidCalc());
      return this.state.periodicPay20;
    } else {
      this.totalPaidCalc()
      return 0;
    }
  }

  totalPaidCalc = () => {
    let numOfPayments = this.state.numberOfPayments;
    let paymentAmount = this.state.chosenPeriodicPay;
    this.setState({
      totalPaid: numOfPayments * paymentAmount
    }
    )
  }

  handleHouseType = (event) => {
    this.setState({
      houseType: event.target.value
    }, () => this.totalCashNeededCalc()
    );
  }

  handleDownType = (event) => {
    let stateCallbacks = () => {
      this.totalCashNeededCalc();
      this.monthlyExpensesCalc()
    }
    this.setState({
      chosenDownPay: parseInt(event.target.value),
      amortizationBalance: this.state.chosenPrincipal
    }, () => stateCallbacks()
    );
  }

  handleDownTypeExpense = (event) => {
    let stateCallbacks = () => {
      this.monthlyExpensesCalc();
    }

    this.setState({
      chosenDownPayExpense: parseInt(event.target.value),
      amortizationBalance: this.state.chosenPrincipal,
      showTable: true
    }, () => stateCallbacks()
    );
  }

  handleDownTypeAmortizationSchedule = (event) => {
    let stateCallbacks = () => {
      this.monthlyExpensesCalc();
    }

    this.setState({
      chosenDownPayExpense: parseInt(event.target.value),
      amortizationBalance: this.state.chosenPrincipal,
    }, () => stateCallbacks()
    );
  }

  dropdownToggleCashNeeded = () => {
    this.setState(prevState => ({
      showBodyCashNeeded: !prevState.showBodyCashNeeded
    }))
  }

  dropdownToggleMonthlyExpenses = () => {
    this.setState(prevState => ({
      showBodyMonthlyExpenses: !prevState.showBodyMonthlyExpenses
    }))
  }

  dropdownToggleAmortization = () => {
    this.setState(prevState => ({
      showBodyAmortization: !prevState.showBodyAmortization
    }))
  }

  totalCashNeededCalc = () => {
    let condoFee = this.state.houseType ? 100 : 0;
    let titleInsurance = (this.state.amount) * 0.001;

    this.setState({
      totalCashNeeded: parseInt((this.state.chosenDownPay)) + 1000 + parseInt(condoFee) + parseInt(titleInsurance)
    })
  }

  handleChangePropertyTax = (event, maskedvalue, floatvalue) => {
    this.setState({
      propertyTax: maskedvalue,
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangeMonthlyDebt = (event, maskedvalue, floatvalue) => {
    this.setState({
      monthlyDebtPayments: maskedvalue,
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangeUtilities = (event, maskedvalue, floatvalue) => {
    this.setState({
      utilities: maskedvalue,
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangeCondoFees = (event, maskedvalue, floatvalue) => {
    this.setState({
      condoFees: maskedvalue,
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangePropertyInsurance = (event, maskedvalue, floatvalue) => {
    this.setState({
      propertyInsurance: maskedvalue,
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangePhone = (event, maskedvalue, floatvalue) => {
    this.setState({
      phone: maskedvalue
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangeCable = (event, maskedvalue, floatvalue) => {
    this.setState({
      cable: maskedvalue,
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangeInternet = (event, maskedvalue, floatvalue) => {
    this.setState({
      internet: maskedvalue,
    }, () => this.monthlyExpensesCalc()
    )
  }

  handleChangeMortgagePayment = (event) => {
    this.setState({
      mortgagePayment: parseInt(event.target.value)
    }, () => this.monthlyExpensesCalc()
    )
  }

  monthlyExpensesCalc = () => {
    let propertyTaxVal = this.state.propertyTax;
    let condoFeesVal = this.state.condoFees;
    let utilitiesVal = this.state.utilities;
    let phoneVal = this.state.phone;
    let cableVal = this.state.cable;
    let internetVal = this.state.internet;
    let MonthlyDebtVal = this.state.monthlyDebtPayments;

    let totalExpenses =
      parseInt(propertyTaxVal) +
      parseInt(utilitiesVal) +
      parseInt(condoFeesVal) +
      parseInt(phoneVal) +
      parseInt(cableVal) +
      parseInt(internetVal) +
      parseInt(MonthlyDebtVal) +
      parseInt(this.chosenPeriodicPayCalc());

    this.setState({
      totalMonthlyPayments: totalExpenses,
      amortizationBalance: this.state.chosenPrincipal
    });
  }


  createTable = () => {
    console.log('Started CreateTable');
    let date = new Date();
    let year = date.getFullYear();
    let nextYear = parseInt(year) + 1;
    let chartYear = parseInt(year) + 1;


    let periodicPay = this.state.chosenPeriodicPay;
    let numOfPayments = this.state.numberOfPayments;
    let period = this.state.years;
    let totalPeriod = this.state.years * numOfPayments;
    let principal = this.state.chosenPrincipal;
    let totalPaid = this.state.totalPaid;
    let rate = parseInt(this.state.rate) / 100;
    let effectiveRate = this.state.effectiveRate;
    var nominalRate = numOfPayments * (Math.pow(effectiveRate + 1, 1 / numOfPayments) - 1);
    let periodicRate = nominalRate;

    let interest;
    let principalPaid;
    let oldBalance = principal;

    let key = 0;

    let table = [];
    let totalPaidInPeriod = [];
    let totalInterestInPeriod = [];
    let totalPrincipalInPeriod = [];

    let chartData = [];
    let chartLabels = [];



    // Outer loop to create parent
    for (let i = 0; i < period; i++) {

      key++;
      interest = oldBalance * periodicRate;
      principalPaid = totalPaid - interest;
      oldBalance = oldBalance - principalPaid;
      principal = oldBalance;

      totalPaidInPeriod.push(totalPaid);
      totalInterestInPeriod.push(interest);
      totalPrincipalInPeriod.push(principalPaid);

      chartData.push(Number((oldBalance < 1 ? 0 : oldBalance).toFixed(2)));
      chartLabels.push(chartYear++);

      table.push(
        i === 5 ?
          <tr key={key}>
            <td colspan="5" style={{
              boxSizing: 'border-box',
              width: '20%',
              height: 53,
              backgroundColor: '#77bc15',
              color: '#fff',
              padding: 15,
              textAlign: 'center',
            }}>
              The highlighted line above displays the totals at the end of your mortgage term. At this time, you will renew your mortgage and choose among the rates that are available. The following analysis assumes you will lock in the same rate for the remainder of the amortization period which may not be possible.
        </td>
          </tr>
          :
          ''
      );

      //Create the parent and add the children
      table.push(
        <tr key={key}>
          <td style={{
            boxSizing: 'border-box',
            width: '20%',
            height: 38,
            backgroundColor: '#ffffff',
            color: '#000',
            textAlign: 'center',
            padding: '0 15px'
          }}>
            {`${parseInt(nextYear++)}`}
          </td>

          <td style={{
            boxSizing: 'border-box',
            width: '20%',
            height: 38,
            backgroundColor: '#f6feec',
            color: '#000',
            textAlign: 'center',
            padding: '0 15px'
          }}>
            {<CurrencyInput value={totalPaid} />}
          </td>

          <td style={{
            boxSizing: 'border-box',
            width: '20%',
            height: 38,
            backgroundColor: '#ffffff',
            color: '#000',
            textAlign: 'center',
            padding: '0 15px'
          }}>
            {<CurrencyInput value={principalPaid} />}
          </td>

          <td style={{
            boxSizing: 'border-box',
            width: '20%',
            height: 38,
            backgroundColor: '#f6feec',
            color: '#000',
            textAlign: 'center',
            padding: '0 15px'
          }}>
            {<CurrencyInput value={interest} />}
          </td>

          <td style={{
            boxSizing: 'border-box',
            width: '20%',
            height: 38,
            backgroundColor: '#ffffff',
            color: '#000',
            textAlign: 'center',
            padding: '0 15px'
          }}>
            {<CurrencyInput value={oldBalance < 1 ? 0 : oldBalance} />}
          </td>
        </tr>)

      table.push(
        i === 4 && period > 5 ?
          <tr>
            <td className={style.total_row} cellpadding="0" cellspacing="0">Totals</td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={totalPaidInPeriod.reduce((a, b) => a + b, 0)} />
            </td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={totalInterestInPeriod.reduce((a, b) => a + b, 0)} />
            </td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={totalPrincipalInPeriod.reduce((a, b) => a + b, 0)} />
            </td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={principal} />
            </td>
          </tr>
          :
          ''
      );

      table.push(
        i === period - 1 ?
          <tr>
            <td className={style.total_row} cellpadding="0" cellspacing="0">Totals</td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={totalPaidInPeriod.reduce((a, b) => a + b, 0)} />
            </td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={totalInterestInPeriod.reduce((a, b) => a + b, 0)} />
            </td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={this.state.chosenPrincipal} />
            </td>
            <td className={style.total_row} cellpadding="0" cellspacing="0">
              <CurrencyInput value={0} />
            </td>
          </tr>
          :
          ''
      );
    }

    console.log('from CreateTable: ', table);

    let stateCallbacks = (tableRows, data, label) => {
      this.setChartData(data, label);
      this.amortizationTable(tableRows);
    }

    this.setState({
      amortizationTable: table,
      showTable: true
    }, () => stateCallbacks(table, chartData, chartLabels))
  }

  setChartData = (data, label) => {

    this.setState({
      chartData: {
        labels: label,
        datasets: [
          {
            label: 'Balance',
            backgroundColor: '#77bc15',
            borderColor: 'transparent',
            borderWidth: 1,
            hoverBackgroundColor: '#77bc15',
            data: data
          }
        ]
      }
    })
  }

  amortizationTable = (tableData) => {
    console.log('amortizationTable has started');
    console.log('from AmortizationTable: ', tableData);

    // var myTable = tableData.map((row, key) => {
    //   return row;
    // }) 

    // return myTable;
  }

  emptyField = (event) => {
    event.target.value = '';
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState.chosenPeriodicPay !== this.state.chosenPeriodicPay) {
      this.setState({
        chosenPeriodicPay: this.chosenPeriodicPayCalc()
      }, () => this.createTable()
      )
    }
  }




  render() {
    const toMoney = new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currencyDisplay: 'symbol',
      currency: 'CAD'
    });

    const user = this.props.user[0];
    const data = this.state.chartData;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar logo={user.logoHeader.url} logo2={user.hasLogo2 ? user.logoHeader2.url : ''} email={user.email} phone={user.phone} showWhatsAppButton={user.whatsapp} />

        <div className={style.ax_calc_App}>
          <div className={style.ax_calc_container}>

            <div className={`${style.ax_calc_row} ${style.asking_section}`}>
              <div className={style.ax_calc_left_col}>
                <h2 className={style.ax_calc_primary_font}>Asking Price:</h2>
              </div>
              <div className={style.ax_calc_right_col}>
                <CurrencyInput className={style.ax_asking_input} prefix="$" value={this.state.amount} onChange={this.onChangeAmount} selectAllOnFocus={true} onClick={this.emptyField} />
                <button className={style.ax_calc_btn_go} onClick={this.handleInitialCalc}>Start</button>
              </div>
            </div>

            <div className={style.ax_calc_calculator_section} style={{ marginBottom: 0 }}>
              <div className={style.ax_calc_row} style={{ marginBottom: 0 }}>
                <div className={style.ax_calc_row_inner} style={{ marginBottom: 0, marginTop: 10 }}>
                  <h2 className={style.ax_calc_primary_font} style={{ margin: 0 }}>Mortgage Payment</h2>

                </div>
              </div>
              <div className={style.ax_calc_row}>
                <div className={style.ax_calc_left_col}>
                  <p className={style.ax_calc_downpay_label}>Down Payment</p>
                </div>
                <div className={style.ax_calc_right_col}>
                  <div className={style.ax_calc_row_inner}>
                    <div className={style.ax_calc_col_25}>
                      <h3>5%</h3>
                      <input type="text" readOnly value={toMoney.format(this.state.downPay5)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <h3>10%</h3>
                      <input type="text" readOnly value={toMoney.format(this.state.downPay10)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <h3>15%</h3>
                      <input type="text" readOnly value={toMoney.format(this.state.downPay15)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <h3>20%</h3>
                      <input type="text" readOnly value={toMoney.format(this.state.downPay20)}></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.ax_calc_row}>
                <div className={style.ax_calc_left_col}>
                  <p>Mortgage Insurance</p>
                </div>
                <div className={style.ax_calc_right_col}>
                  <div className={style.ax_calc_row_inner}>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.insurance5)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.insurance10)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.insurance15)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.insurance20)}></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.ax_calc_section_footer}>
                <div className={style.ax_calc_left_col}>
                  <h3>Total Mortgage Required:</h3>
                </div>
                <div className={style.ax_calc_right_col}>
                  <div className={style.ax_calc_row_inner}>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.principal5)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.principal10)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.principal15)}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(this.state.principal20)}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.ax_calc_calculator_section}>
              <div className={style.ax_calc_row} style={{ paddingTop: 15 }}>
                <p style={{ marginBottom: 0 }}>Please select the <strong>Amortization Period</strong> and insert your <strong>Interest Rate</strong>.</p>
              </div>
              <div className={style.ax_calc_row} style={{ paddingTop: 15 }}>
                <div className={style.ax_calc_left_col}>
                  <p>Amortization Period:</p>
                </div>
                <div className={style.ax_calc_right_col}>
                  <div className={style.ax_calc_col_25}>
                    <select value={this.state.years} onChange={this.onChangeYears}>
                      <option value='select'>Select</option>
                      <option value={5}>5 Years</option>
                      <option value={10}>10 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={25}>25 Years</option>
                    </select>
                  </div>
                  <div className={style.ax_calc_col_25}>
                    <select value={this.state.years} onChange={this.onChangeYears}>
                      <option value='select'>Select</option>
                      <option value={5}>5 Years</option>
                      <option value={10}>10 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={25}>25 Years</option>
                    </select>
                  </div>
                  <div className={style.ax_calc_col_25}>
                    <select value={this.state.years} onChange={this.onChangeYears}>
                      <option value='select'>Select</option>
                      <option value={5}>5 Years</option>
                      <option value={10}>10 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={25}>25 Years</option>
                    </select>
                  </div>
                  <div className={style.ax_calc_col_25}>
                    <select value={this.state.years} onChange={this.onChangeYears}>
                      <option value='select'>Select</option>
                      <option value={5}>5 Years</option>
                      <option value={10}>10 Years</option>
                      <option value={15}>15 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={25}>25 Years</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={style.ax_calc_row}>
                <div className={style.ax_calc_left_col}>
                  <p>Mortgage Rate:</p>
                </div>
                <div className={style.ax_calc_right_col}>
                  <div className={style.ax_calc_col_25}>
                    <input type="text" value={this.state.rate} onChange={this.onChangeRate} onClick={this.emptyField} />
                  </div>
                  <div className={style.ax_calc_col_25}>
                    <input type="text" value={this.state.rate} onChange={this.onChangeRate} onClick={this.emptyField} />
                  </div>
                  <div className={style.ax_calc_col_25}>
                    <input type="text" value={this.state.rate} onChange={this.onChangeRate} onClick={this.emptyField} />
                  </div>
                  <div className={style.ax_calc_col_25}>
                    <input type="text" value={this.state.rate} onChange={this.onChangeRate} onClick={this.emptyField} />
                  </div>
                </div>
              </div>

              <div className={style.ax_calc_row}>
                <div className={style.ax_calc_left_col}>
                  <p>Payment Frequency:</p>
                </div>
                <div className={style.ax_calc_right_col}>
                  <div className={style.ax_calc_row_inner}>
                    <select value={this.state.frequency} onChange={this.onChangeFrequency} style={{ width: '97%' }}>
                      <option value='select'>Select Payment Frequency</option>
                      <option value='monthly'>Monthly</option>
                      <option value='biweekly'>Bi-Weekly</option>
                      <option value='weekly'>Weekly</option>
                      <option value='accbiweekly'>Accelerated Bi-Weekly</option>
                      <option value='accweekly'>Accelerated Weekly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.ax_calc_section_footer}>
                <div className={style.ax_calc_left_col}>
                  <h3>Total Mortgage Payment:</h3>
                </div>
                <div className={style.ax_calc_right_col}>
                  <div className={style.ax_calc_row_inner}>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(Math.trunc(this.state.periodicPay5))}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(Math.trunc(this.state.periodicPay10))}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(Math.trunc(this.state.periodicPay15))}></input>
                    </div>
                    <div className={style.ax_calc_col_25}>
                      <input type="text" readOnly value={toMoney.format(Math.trunc(this.state.periodicPay20))}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className={`${style.ax_calc_calculator_section} ${style.dropdown_section}`}>
              <div className={style.ax_calc_row}>
                <div className={`${style.ax_calc_row_inner} ${style.dropdown_toggle}`} style={{ marginBottom: 0, marginTop: 10 }} onClick={this.dropdownToggleCashNeeded}>
                  <h2 className={style.ax_calc_primary_font}>Cash Needed</h2>
                </div>
              </div>

              <div className={this.state.showBodyCashNeeded ? 'show-dropdown-body dropdown-body' : 'dropdown-body'}>
                <div className={style.ax_calc_row}>
                  <p style={{ marginBottom: 0 }}>When you purchase a house, there are a number of costs you'll need to put cash aside for in addition to your down payment. These costs depend on a number of factors including things like what kind of home you are buying (i.e. house vs. condo) and where the home is located. Our tool will help you calculate these costs, so you know how much you'll need to save.</p>

                  <h3>Required Cash Expenditures</h3>
                  <div className={style.ax_calc_left_col}>
                    <p style={{ paddingTop: 30, marginBottom: 0 }}>Scenario: </p>
                  </div>
                  <div className={style.ax_calc_right_col}>
                    <div className={style.ax_calc_col_50}>
                      <p>Down Payment: </p>
                      <select value={this.state.chosenDownPay} onChange={this.handleDownType}>
                        <option value="select">Select</option>
                        <option value={this.state.downPay5}>5% Down</option>
                        <option value={this.state.downPay10}>10% Down</option>
                        <option value={this.state.downPay15}>15% Down</option>
                        <option value={this.state.downPay20}>20% Down</option>
                      </select>
                    </div>

                    <div className={style.ax_calc_col_50}>
                      <p>Type of Home: </p>
                      <select value={this.state.houseType} onChange={this.handleHouseType}>
                        <option value={false}>House</option>
                        <option value={true}>Condominium</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={`${style.ax_calc_row} ${style.no_margin}`}>
                  <div className={style.ax_calc_cash_needed_item}>
                    <label>Down Payment: </label>
                    <input type="text" readOnly value={toMoney.format(this.state.chosenDownPay)} />
                  </div>
                  <div className={style.ax_calc_cash_needed_item}>
                    <label>Lawyer Fees: </label>
                    <input type="text" readOnly value={toMoney.format(1000)} />
                  </div>
                  <div className={style.ax_calc_cash_needed_item}>
                    <label>Title Insurance: </label>
                    <input type="text" readOnly value={toMoney.format((this.state.amount) * 0.001)} />
                  </div>
                  <div className={style.ax_calc_cash_needed_item}>
                    <label>Estoppel certificate fee: </label>
                    <input type="text" readOnly value={toMoney.format(this.state.houseType ? 100 : 0)} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.cash_needed_totals}`}>
                    <label>Total Cash Needed: </label>
                    <input type="text" readOnly value={toMoney.format(this.state.totalCashNeeded)} />
                  </div>
                </div>
              </div>
            </div>


            <div className={`${style.ax_calc_calculator_section} ${style.dropdown_section}`}>
              <div className={style.ax_calc_row}>
                <div className={`${style.ax_calc_row_inner} ${style.dropdown_toggle}`} style={{ marginBottom: 0, marginTop: 10 }} onClick={this.dropdownToggleMonthlyExpenses}>
                  <h2 className={style.ax_calc_primary_font}>Monthly Expenses</h2>
                </div>
              </div>

              <div className={this.state.showBodyMonthlyExpenses ? 'show-dropdown-body dropdown-body' : 'dropdown-body'}>
                <div className={style.ax_calc_row}>
                  <div className={style.ax_calc_left_col}>
                    <p style={{ paddingTop: 30, marginBottom: 0 }}>Scenario: </p>
                  </div>
                  <div className={style.ax_calc_right_col}>
                    <div style={{ width: '100%' }}>
                      <p>Down Payment: </p>
                      <select value={this.state.chosenDownPayExpense} onChange={this.handleDownTypeExpense} style={{ width: '100%' }}>
                        <option value="select">Select</option>
                        <option value={5}>5% Down</option>
                        <option value={10}>10% Down</option>
                        <option value={15}>15% Down</option>
                        <option value={20}>20% Down</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={`${style.ax_calc_row} ${style.no_margin}`}>
                  <div className={style.ax_calc_row_inner}>
                    <h3>Insert your Monthly Expenses on the value boxes for calculating.</h3>
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>Mortgage Payment: </label>
                    <input type="text" readOnly value={toMoney.format(Math.trunc(this.state.chosenPeriodicPay))} style={{ border: 'none !important', backgroundColor: 'transparent !important' }} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>Property Tax: </label>
                    <CurrencyInput selectAllOnFocus={true} prefix="$" value={this.state.propertyTax} onChange={this.handleChangePropertyTax} onClick={this.emptyField} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>Monthly Debt Payments: </label>
                    <CurrencyInput selectAllOnFocus={true} prefix="$" value={this.state.monthlyDebtPayments} onChange={this.handleChangeMonthlyDebt} onClick={this.emptyField} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>utilities: </label>
                    <CurrencyInput selectAllOnFocus={true} prefix="$" value={this.state.utilities} onChange={this.handleChangeUtilities} onClick={this.emptyField} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>Condo Fees: </label>
                    <CurrencyInput selectAllOnFocus={true} prefix="$" value={this.state.condoFees} onChange={this.handleChangeCondoFees} onClick={this.emptyField} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>Phone: </label>
                    <CurrencyInput selectAllOnFocus={true} prefix="$" value={this.state.phone} onChange={this.handleChangePhone} onClick={this.emptyField} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>Cable: </label>
                    <CurrencyInput selectAllOnFocus={true} prefix="$" value={this.state.cable} onChange={this.handleChangeCable} onClick={this.emptyField} />
                  </div>
                  <div className={`${style.ax_calc_cash_needed_item} ${style.expense}`}>
                    <label>Internet: </label>
                    <CurrencyInput selectAllOnFocus={true} prefix="$" value={this.state.internet} onChange={this.handleChangeInternet} onClick={this.emptyField} />
                  </div>

                  <div className={`${style.ax_calc_cash_needed_item} ${style.cash_needed_totals}`}>
                    <label>Total Expenses: </label>
                    <input type="text" readOnly value={toMoney.format(Math.trunc(this.state.totalMonthlyPayments))} />
                  </div>
                </div>
              </div>
            </div>


            <div className={`${style.ax_calc_calculator_section} ${style.dropdown_section}`}>
              <div className={style.ax_calc_row}>
                <div className={`${style.ax_calc_row_inner} ${style.dropdown_toggle}`} style={{ marginBottom: 0, marginTop: 10 }} onClick={this.dropdownToggleAmortization}>
                  <h2 className={style.ax_calc_primary_font}>Amortization Schedule</h2>
                </div>
              </div>

              <div className={this.state.showBodyAmortization ? 'show-dropdown-body dropdown-body' : 'dropdown-body'}>
                <div className={style.ax_calc_row}>
                  <div className={style.ax_calc_left_col}>
                    <p style={{ paddingTop: 30, marginBottom: 0 }}>Scenario: </p>
                  </div>
                  <div className={style.ax_calc_right_col}>
                    <div style={{ width: '100%' }}>
                      <p>Down Payment: </p>
                      <select value={this.state.chosenDownPayExpense} onChange={this.handleDownTypeAmortizationSchedule} style={{ width: '100%' }}>
                        <option value="select">Select</option>
                        <option value={5}>5% Down</option>
                        <option value={10}>10% Down</option>
                        <option value={15}>15% Down</option>
                        <option value={20}>20% Down</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={style.mc_calc_row}>
                  <div className={style.ax_calc_inner_container}>
                    <div className={style.ax_amortization_chart}>
                      <Bar
                        data={data}
                        width={50}
                        height={50}
                        options={{
                          maintainAspectRatio: false
                        }}
                      />
                    </div>
                  </div>

                </div>

                <div className={style.ax_calc_row}>
                  <div className={style.ax_amortization_table} style={this.state.showTable ? { height: 0 } : { height: 'auto' }}>
                    <div className={style.ax_table_head}>
                      <div style={{ width: '20%', height: 45, float: 'left' }}>Year</div>
                      <div style={{ width: '20%', height: 45, float: 'left' }}>Amount Paid</div>
                      <div style={{ width: '20%', height: 45, float: 'left' }}>Principal Paid</div>
                      <div style={{ width: '20%', height: 45, float: 'left' }}>Interest Paid</div>
                      <div style={{ width: '20%', height: 45, float: 'left' }}>Balance</div>
                    </div>
                    <div className={style.ax_table_box}>
                      <table cellPadding="0" cellSpacing="0">
                        {this.state.showTable ? this.state.amortizationTable : null}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          logo={user.logoFooter.url}
          email={user.email}
          address={user.address}
          fax={user.fax ? user.fax : false}
          phone={user.phone}
          facebook={user.facebook}
          instagram={user.instagram}
          twitter={user.twitter}
          linkedin={user.linkedin}
          youtube={user.youtube}
        />
      </motion.div>
    );
  }
}

export const getStaticProps = async () => {

  try {
    const { data } = await axios.get(`https://centumapi.herokuapp.com/users?email_eq=${currentUser.email}`);
    const user = await data;
    return {
      props: { user }
    }
  } catch (error) {
    console.log(error)
  }

  return { props: { data } };

}

export default Calculator;
