type ConditionalWrapperType = {
    condition: boolean,
    wrapper: (e:(JSX.Element)) => JSX.Element,
    children: JSX.Element,
}
function ConditionalWrapper({condition, wrapper, children}:ConditionalWrapperType) {
    return condition ? wrapper(children) : children
}

export default ConditionalWrapper