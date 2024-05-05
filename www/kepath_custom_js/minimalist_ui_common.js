function funckepathGetVariableState(defaultValue, layer0, layer1, layer2, layer3, layer4, layer5, layer6) {
    var returnValue = defaultValue;
    var entityRef = funckepathGetVariableRef(layer0, layer1, layer2, layer3, layer4, layer5, layer6)
    if (states[entityRef]?.state !== undefined) {
        returnValue = states[entityRef]?.state
    }
    return returnValue;
}

function funckepathGetVariableRef(layer0, layer1, layer2, layer3, layer4, layer5, layer6) {
    //var entityState = defaultValue;
    var returnValue = undefined;
    var entityRef = funckepathTestChainDefined(layer0, layer1, layer2, layer3, layer4, layer5, layer6)
    if (states[entityRef]?.state !== undefined) {
        returnValue = entityRef
    }
    return returnValue;
}

function funckepathGetVariableAttribute(defaultValue, entityRef, layer0, layer1, layer2, layer3, layer4, layer5, layer6) {
    var returnValue = defaultValue;
    var attributeRef = funckepathTestChainDefined(layer0, layer1, layer2, layer3, layer4, layer5, layer6);
    if (states[entityRef]?.attributes[attributeRef] !== undefined) {
        returnValue = states[entityRef]?.attributes[attributeRef]
    }
    return returnValue;
}

function funckepathTestChainDefined(layer0, layer1, layer2, layer3, layer4, layer5, layer6) {
    var returnValue = undefined;
    if (layer0 !== undefined && Array.isArray(layer0)) {
        if (layer1 !== undefined && Array.isArray(layer0?.layer1)) {
            if (layer2 !== undefined && Array.isArray(layer0?.layer1?.layer2)) {
                if (layer3 !== undefined && Array.isArray(layer0?.layer1?.layer2?.layer3)) {
                    if (layer4 !== undefined && Array.isArray(layer0?.layer1?.layer2?.layer3?.layer4)) {
                        if (layer5 !== undefined && Array.isArray(layer0?.layer1?.layer2?.layer3?.layer4?.layer5)) {
                            if (layer6 !== undefined && Array.isArray(layer0?.layer1?.layer2?.layer3?.layer4?.layer5?.layer6)) {
                                if (typeof layer0?.layer1?.layer2?.layer3?.layer4?.layer5?.layer6 !== undefined) {
                                    returnValue = layer0?.layer1?.layer2?.layer3?.layer4?.layer5?.layer6;
                                }
                            } else {
                                if (typeof layer0?.layer1?.layer2?.layer3?.layer4?.layer5 !== undefined) {
                                    returnValue = layer0?.layer1?.layer2?.layer3?.layer4?.layer5;
                                }
                            }
                        } else {
                            if (typeof layer0?.layer1?.layer2?.layer3?.layer4 !== undefined) {
                                returnValue = layer0?.layer1?.layer2?.layer3?.layer4;
                            }
                        }
                    } else {
                        if (typeof layer0?.layer1?.layer2?.layer3 !== undefined) {
                            returnValue = layer0?.layer1?.layer2?.layer3;
                        }
                    }
                } else {
                    if (typeof layer0?.layer1?.layer2 !== undefined) {
                        returnValue = layer0?.layer1?.layer2;
                    }
                }
            } else {
                if (typeof layer0?.layer1 !== undefined) {
                    returnValue = layer0?.layer1;
                }
            }
        } else {
            if (typeof layer0 !== undefined) {
                returnValue = layer0;
            }
        }
    }
    alert("returnValue" + returnValue);
    return returnValue;
}

function funckepathIsString(defaultValue, inValue) {
    var returnValue = defaultValue;
    if (typeof inValue === "string") {
        returnValue = inValue.toLowerCase();
    }
    return returnValue;
}

function funckepathIsBoolean(defaultValue, inValue) {
    var returnValue = defaultValue;
    if (typeof inValue === "boolean") {
        returnValue = inValue;
    }
    return returnValue;
}

function funckepathTestResource() {
    alert("test successful");
}
