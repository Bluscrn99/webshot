import { settings } from "../store";

export let SteamJS = {
	GetAchievement(achievement: string) {
		console.debug("[Steamworks] GetAchievement", achievement);
		return false;
	},
	SetAchievement(achievement: string) {
		console.debug("[Steamworks] SetAchievement", achievement);
	},
	GetStat(stat: string) {
		console.debug("[Steamworks] GetStat", stat);
		return 0;
	},
	SetStat(stat: string, value: number) {
		console.debug("[Steamworks] SetStat", stat, value);
	},
	GetPersonaName() {
		console.debug("[Steamworks] GetPersonaName");
		return settings.name;
	},
	GetLanguage() {
		console.debug("[Steamworks] GetLanguage");

		// the absolute worst way to do this. they should hang me for this - fish

		switch (navigator.language) {
			case "zh-CN":
			case "zh-SG":
				return "schinese";
			case "zh-TW":
			case "zh-HK":
				return "tchinese";
			case "pt-BR":
				return "brazilian";
			case "pt-PT":
				return "portuguese";
			case "es-419":
				return "latam";
			case "es-ES":
				return "spanish";
		}

		switch (navigator.language.split("-")[0]) {
			case "de": return "german";
			case "fr": return "french";
			case "it": return "italian";
			case "ja": return "japanese";
			case "ko": return "korean";
			case "ru": return "russian";
			default: return "english";
		}
	}
};
