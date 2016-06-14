function BankAccount(name, initialDeposit, deposit, withdrawal){
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
  this.balance = 0;
}

BankAccount.prototype.balance = function() {
  return this.balance = this.initialDeposit;
  console.log(this.balance);
  // if (this.balance < this.withdrawal) {
  //   Alert("You don't have enough funds");
  // } else {
  //   return this.balance -= this.withdrawal;
  // }
  var name;
  var initialDeposit;
}

$(document).ready(function() {
  $("form#Register").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    console.log(name);
    var initialDeposit = parseInt($("#init-deposit").val());
    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());
    var newBalance = new BankAccount(name, initialDeposit, deposit, withdrawal);
    newBalance.balance();

    $("#current").text(newBalance.balance);
    $("#current").show();
  });
});
