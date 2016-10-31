import re

def get_matching_words(regex):
    words = ["aimlessness", "assassin", "baby", "beekeeper", "regularexpression", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]

    return [word for word in words if re.search(regex, word)]

print get_matching_words(r"(?=.*r)(?=.*e)(?=.*g)(?=.*u)(?=.*l)(?=.*a)(?=.*x)(?=.*p)(?=.*s)(?=.*i)(?=.*o)(?=.*n)")
