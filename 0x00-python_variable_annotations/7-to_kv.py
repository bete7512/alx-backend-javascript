#!/usr/bin/env python3
""" 0x00. Python - Variable Annotations """


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Return a tuple """
    return (k, v * v)
