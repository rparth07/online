/* -*- Mode: C++; tab-width: 4; indent-tabs-mode: nil; c-basic-offset: 4; fill-column: 100 -*- */
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

#include <config.h>

#include "Uri.hpp"

#include <Poco/URI.h>

std::string Uri::encode(const std::string& uri, const std::string& reserved)
{
    std::string encoded;
    Poco::URI::encode(uri, reserved, encoded);
    return encoded;
}

std::string Uri::decode(const std::string& uri)
{
    std::string decoded;
    Poco::URI::decode(uri, decoded);
    return decoded;
}

bool Uri::needsEncoding(const std::string& uri, const std::string& reserved)
{
    const std::string decoded = decode(uri);
    if (decoded != uri)
    {
        // We could decode it; must have been encoded already.
        return false;
    }

    // Identical when decoded, might need encoding.
    const std::string encoded = encode(uri, reserved);

    // If identical, then doesn't need encoding.
    return encoded != uri;
}

/* vim:set shiftwidth=4 softtabstop=4 expandtab: */