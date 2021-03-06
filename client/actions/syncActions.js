// trips
exports.gotAllTrips = payload => ({ type: 'GOT_ALL_TRIPS', payload });
exports.addedTrip = payload => ({ type: 'NEW_TRIP_ADDED', payload });
exports.updatedTrip = payload => ({ type: 'UPDATED_TRIP', payload });
exports.deletedTrip = payload => ({ type: 'DELETED_TRIP', payload });
exports.tripSelected = trip => ({ type: 'TRIP_SELECTED', trip });

// expenses
exports.gotAllExpenses = payload => ({ type: 'GOT_ALL_EXPENSES', payload });
exports.addedExpense = payload => ({ type: 'NEW_EXPENSE_ADDED', payload });
exports.updatedExpense = payload => ({ type: 'UPDATED_EXPENSE', payload });
exports.deletedExpense = payload => ({ type: 'DELETED_EXPENSE', payload });
exports.convertCurrencyOfExpense = payload => ({ type: 'CONVERT_CUREENCY_EXPENSE', payload });

//filter
exports.filterTrips = payload => ({ type: 'FILTER_TRIP', payload });
exports.filterExpenses = payload => ({ type: 'FILTER_EXPENSE', payload });

// trip-expenses
exports.gotExpensesByTripId = payload => ({ type: 'GOT_ALL_EXPENSES_OF_TRIP', payload });
exports.currencyRates = payload => ({ type: 'STORE_RATES', payload });
