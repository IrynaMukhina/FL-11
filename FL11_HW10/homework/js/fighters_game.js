function Fighter(prop) {
	const gamer = {};
	gamer.name = prop.name;
	gamer.damage = prop.damage;
	gamer.health = prop.hp;
	gamer.agility = prop.agility;
	gamer.wins = 0;
	gamer.loses = 0;

	this.getName = function() {
		return gamer.name;
	}
	this.getDamage = function() {
		return gamer.damage;
	}
	this.getAgility = function() {
		return gamer.agility;
	}
	this.getHealth = function() {
		return gamer.health;
	}
	this.attack = function(opponent) {
		const fail = 100 - this.getAgility();
		const randomAttack = Math.random() * 100 + 1;
		if(randomAttack > fail) {
			opponent.dealDamage();
			console.log(`${this.getName()} make ${this.getDamage()} to ${opponent.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	}
	this.logCombatHistory = function() {
		return `Name: ${gamer.name}, Wins: ${gamer.wins}, Losses: ${gamer.loses}`;
	}
	this.heal = function(amount) {
		gamer.health += amount;
	}
	this.dealDamage = function() {
		if(gamer.health >= gamer.damage){
			gamer.health -= gamer.damage;
		} else {
			gamer.health = 0;
		}
	}
	this.addWin = function() {
		gamer.wins += 1;
	}
	this.addLoss = function() {
		gamer.loses += 1;
	}
}

function battle(gamer1, gamer2) {
	if (gamer1.getHealth() === 0) {
		console.log(`${gamer1.getName()} is dead and can't figth`);
	} else if (gamer2.getHealth() === 0) {
		console.log(`${gamer2.getName()} is dead and can't figth`);
	} else {
		while (gamer1.getHealth() !== 0 && gamer2.getHealth() !== 0) {
			gamer1.attack(gamer2);
			gamer2.attack(gamer1);
		}
		if (gamer1.getHealth() === 0) {
			gamer2.addWin();
			gamer1.addLoss();
		}
		if (gamer2.getHealth() === 0) {
			gamer2.addWin();
			gamer1.addLoss();
		}
	}
}