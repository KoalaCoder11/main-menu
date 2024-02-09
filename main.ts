namespace SpriteKind {
    export const Selector = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Selector, sprites.dungeon.greenInnerSouthWest, function (sprite, location) {
    chase_game = game.ask("Do you want to play a chase game?")
    if (chase_game) {
        game.splash("OK, now you will go play the chase game!")
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
scene.onOverlapTile(SpriteKind.Selector, sprites.dungeon.collectibleRedCrystal, function (sprite5, location5) {
    zodiac_game = game.ask("Do you want to learn your astrological zodiac sign?")
    if (zodiac_game) {
        game.splash("OK, now you will go play the zodiac-guesser game!")
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
scene.onOverlapTile(SpriteKind.Selector, sprites.dungeon.collectibleBlueCrystal, function (sprite6, location6) {
    zodiac_game = game.ask("Do you want to learn your astrological zodiac sign?")
    if (zodiac_game) {
        game.splash("OK, now you will go play the zodiac-guesser game!")
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
scene.onOverlapTile(SpriteKind.Selector, sprites.dungeon.purpleInnerSouthWest, function (sprite2, location2) {
    shooter_game = game.ask("Do you want to play an alien-shooter game?")
    if (shooter_game) {
        game.splash("OK, now you will go play the alien-shooter game!")
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
scene.onOverlapTile(SpriteKind.Selector, sprites.dungeon.purpleInnerSouthEast, function (sprite3, location3) {
    shooter_game = game.ask("Do you want to play an alien-shooter game?")
    if (shooter_game) {
        game.splash("OK, now you will go play the alien-shooter game!")
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
scene.onOverlapTile(SpriteKind.Selector, sprites.dungeon.greenInnerSouthEast, function (sprite4, location4) {
    chase_game = game.ask("Do you want to play a chase game?")
    if (chase_game) {
        game.splash("OK, now you will go play the chase game!")
    } else {
        tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
    }
})
let shooter_game = false
let zodiac_game = false
let chase_game = false
let woof: Sprite = null
tiles.setCurrentTilemap(tilemap`main_menu`)
woof = sprites.create(assets.image`woof`, SpriteKind.Selector)
tiles.placeOnRandomTile(woof, sprites.dungeon.collectibleInsignia)
controller.moveSprite(woof, 100, 100)
scene.cameraFollowSprite(woof)
