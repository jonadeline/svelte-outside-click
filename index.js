export default function clickOutside(node, onEventFunction) {
    const handleClick = event => {
        const isVisible = node.getBoundingClientRect().left > 0
        var path = event.composedPath();

        if (!path.includes(node) && isVisible) {
            onEventFunction();
        }
    }

    document.addEventListener("click", handleClick);

    return {
        destroy() {
            document.removeEventListener("click", handleClick);
        }
    }
}
